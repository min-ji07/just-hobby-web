
import './assets/css/styles.css'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route } from 'react-router-dom';
import BasicRoutes from './routes/BasicRoutes';
import { Login } from './pages';
import { Suspense } from 'react';
import CustomSpinner from './component/CustomSpinner.js/CustomSpinner';

const queryClient = new QueryClient();
// queryClient를 생성하고 앱 전체를 감싸줬을 때 생성한 queryClient에 접근 가능하도록 셋팅해주는 것
// queryCache에 직접 접근하기보다 queryClient를 통해 cache와 MutationCache에 접근한다

// 참고 https://leego.tistory.com/entry/react-query%EB%8A%94-%EC%96%B4%EB%96%BB%EA%B2%8C-%EC%9E%91%EB%8F%99%ED%95%A0%EA%B9%8C
// 유니크한 값으로 query-key를 설정해줘야하는 이유

function App() {
  document.title = '';

  return (
    <QueryClientProvider client={queryClient}>
      {/* react-query 세팅시 최상위에 queryClientProvider를 설정 */}
      <BrowserRouter>
        <Suspense fallback={<CustomSpinner />}>
          <BasicRoutes />
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
export default App;
