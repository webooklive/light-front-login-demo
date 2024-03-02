import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePostHog } from 'posthog-js/react';
import { useAuthInfo, withAuthInfo } from '@propelauth/react';
import { Box } from '@mui/material';
import useSWR from 'swr';
import { H } from 'highlight.run';
import { AccountService, OpenAPI } from '../api';
import RotatingLoader from '../common/ui/RotatingLoader';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  account: null,
};

const InternalAuthContext = createContext({ authState: initialState });

export const useAuth = () => useContext(InternalAuthContext);
export const accountFetcher = async () => AccountService.getAccountAuthenticated();

const InternalAuthProvider = ({ children }) => {
  const { user, accessToken } = useAuthInfo();
  const [authState, setAuth] = useState({});
  const navigate = useNavigate();
  const posthog = usePostHog();
  // OpenAPI.TOKEN = accessToken;
  let authInfoRef = useRef(accessToken);
  useEffect(() => {
    authInfoRef = accessToken;
  }, [accessToken]);
  OpenAPI.TOKEN = authInfoRef?.current;
  // useEffect(() => {
  //   OpenAPI.TOKEN = accessToken;
  // }, [accessToken]);
  const identify = (account) => {
    posthog?.identify(user.userId, {
      context: 'console',
      email: user.email,
      accountId: account.id,
      environment: import.meta.env.VITE_REACT_APP_ENVIRONMENT || 'local',
    });
    H.identify(user.email, {
      email: user.email,
      userId: user.userId,
      accountId: account.id,
      accountName: account.accountName,
      environment: import.meta.env.VITE_REACT_APP_ENVIRONMENT || 'local',
    });
  };

  const {
    data: account,
    error,
    isLoading,
  } = useSWR(accessToken ? { opId: 'getAccountAuthenticated' } : null, accountFetcher);
  useEffect(() => {
    if (error) {
      setAuth({ ...authState, isInitialized: true });
    }
  }, [error]);
  useEffect(() => {
    const init = () => {
      if (!isLoading && !error) {
        if (accessToken) {
          identify(account);
          setAuth({
            ...initialState,
            isAuthenticated: true,
            isInitialized: true,
            user,
            account,
          });
        } else {
          setAuth({
            ...authState,
            isInitialized: true,
          });
        }
      }
    };
    void init();
  }, [isLoading, error, account]);
  const memoizedValues = useMemo(() => {
    return { authState };
  }, [authState, navigate]);
  if (!authState.isInitialized) {
    return (
      <Box
        sx={{
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <RotatingLoader />
      </Box>
    );
  }

  return <InternalAuthContext.Provider value={memoizedValues}>{children}</InternalAuthContext.Provider>;
};

export default withAuthInfo(InternalAuthProvider);
