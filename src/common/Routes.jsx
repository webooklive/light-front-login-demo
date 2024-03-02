import { Navigate } from 'react-router-dom';
import React from 'react';
import { AuthProvider } from '@propelauth/react';
import MainLayout from '../dashboard/MainLayout';
import Calendar from '../calendar/Calendar';
import { CalendarProvider } from '../calendar/CalendarContext';
import HomePage from '../marketingsite/HomePage';
import AuthGuard from '../session/AuthGuard';
import InternalAuthProvider from '../session/InternalAuthProvider';

const routes = [
  {
    element: (
      <AuthProvider authUrl="https://43847514863.propelauthtest.com">
        <InternalAuthProvider>
          <AuthGuard>
            <MainLayout />
          </AuthGuard>
        </InternalAuthProvider>
      </AuthProvider>
    ),
    children: [
      {
        path: '/dashboard/calendar',
        element: (
          <CalendarProvider>
            <Calendar />
          </CalendarProvider>
        ),
      },
    ],
  },
  {
    path: '/',
    element: (
      <AuthProvider authUrl="https://43847514863.propelauthtest.com">
        <InternalAuthProvider>
          <HomePage />
        </InternalAuthProvider>
      </AuthProvider>
    ),
  },
  { path: '/dashboard', element: <Navigate to="/dashboard/calendar" /> },
  { path: '*', element: <div>Not found</div> },
];

export default routes;
