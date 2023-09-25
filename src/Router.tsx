import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { SearchPage } from './components/SearchPage';
import { Contact } from './components/Contact';
import { Layout } from './components/Layout';
import { Error } from './components/Error';
import { Ad } from './components/Ad';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <HomePage />,
        index: true,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/ad/:id',
        element: <Ad />,
      },
    ],
  },
]);
