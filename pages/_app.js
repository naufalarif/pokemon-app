import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/vendor/search-antd.css';

export function reportWebVitals(metric) {
  // console.log(metric)
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}