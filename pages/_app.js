import 'tailwindcss/tailwind.css';
import '../src/styles/globals.css';
import 'antd/dist/antd.css';
import '../src/styles/vendor/search-antd.css';
import '../src/styles/vendor/chart-js-2.css';

export function reportWebVitals(metric) {
  // console.log(metric)
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}