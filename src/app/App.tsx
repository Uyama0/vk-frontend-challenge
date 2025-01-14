import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { FavoritesProvider } from './store/FavoritesProvider';
import { router } from './router';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesProvider>
        <RouterProvider router={router}></RouterProvider>
      </FavoritesProvider>
    </QueryClientProvider>
  );
}

export default App;
