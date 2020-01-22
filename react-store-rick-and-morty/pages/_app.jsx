import React from 'react';
import './index.css';
import {StoreProvider} from "../features/Store/Store";

export default function MyApp({ Component, pageProps }) {
    return <StoreProvider><Component {...pageProps} /></StoreProvider>
}