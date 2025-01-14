import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';
import { Main } from '@/pages/main';
import { Favorites } from '@/pages/favorites';
import { ErrorState } from '@/components/errorState';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorState />,
    children: [
      {
        path: '/',
        element: <Main />,
      },
      // {
      //   path: 'orders',
      //   element: <Favorites />,
      // },
    ],
  },
]);
