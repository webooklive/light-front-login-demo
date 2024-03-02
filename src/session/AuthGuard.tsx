import { useLogoutFunction } from '@propelauth/react';
import { useAuth } from './InternalAuthProvider';

const AuthGuard = ({ children }: { children: any }) => {
  const logoutFn = useLogoutFunction();

  const {
    authState: { isAuthenticated, isInitialized },
  } = useAuth();

  if (!isAuthenticated && isInitialized) {
    void logoutFn(true);
    return undefined;
  }
  return children;
};

export default AuthGuard;
