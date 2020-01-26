import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../features/Redux/configureStore';

const store = configureStore();

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
