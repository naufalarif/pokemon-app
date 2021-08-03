import 'tailwindcss/tailwind.css';
import 'styles/globals.css';
import 'antd/dist/antd.css';
import 'styles/vendor/search-antd.css';
import 'styles/vendor/chart-js-2.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { useState } from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

export function reportWebVitals(metric) {
  // console.log(metric)
}

export default function MyApp({ Component, pageProps }) {

  const [ queryClient ] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydrateState}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}