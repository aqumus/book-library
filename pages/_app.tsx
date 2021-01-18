import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider } from 'react-redux';
import { useStore } from '../slices';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
