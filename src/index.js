import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import ErrorPage from './ErrorPage';
import ProfilePage from './components/ProfilePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { SearchResults } from './components/SearchResults';
import { SelectedGame } from './components/SelectedGame';
import Login from './components/Login';

const KEY = '01e85fc802ad4eb8850bc0b50857cb0b';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <SearchResults KEY={KEY} />,
      },
      {
        path: '/',
        element: <SearchResults KEY={KEY} />,
      },
      {
        path: '/search',
        element: <SearchResults KEY={KEY} />,
      },
      {
        path: '/profile',
        element: <ProfilePage />,
      },
      {
        path: '/selected/:gameId',
        element: <SelectedGame />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
