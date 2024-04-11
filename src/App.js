
import './assets/css/styles.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route } from 'react-router-dom';
import BasicRoutes from './routes/BasicRoutes';
import { Login } from './pages';
import { Suspense } from 'react';
import CustomSpinner from './component/CustomSpinner.js/CustomSpinner';

const queryClient = new QueryClient();
console.log('queryClient ==> ', queryClient)

function App() {
  document.title = '';

  return (
    // client={queryClient} 이건뭐지
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<CustomSpinner />}>
          <BasicRoutes />
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
