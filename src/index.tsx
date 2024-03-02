import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { PostHogProvider } from 'posthog-js/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PostHogProvider
        apiKey={'phc_KY9HtE1tICW6n406TSIN4466pLr997uMcw43vpvDdbi'}
        options={{ disable_session_recording: true }}>
        <App />
      </PostHogProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
