import PropTypes from 'prop-types';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, wrapper } from '@redux/store';
import { PrivateRoute } from '@utils/helpers/PrivateRoute';
import { theme, createEmotionCache } from '@components/global';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
    Component,
    pageProps,
    emotionCache = clientSideEmotionCache,
}) {
    return (
        <PersistGate persistor={persistor} loading={null}>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={theme}>
                    <Head>
                        <meta
                            name='viewport'
                            content='width=device-width, initial-scale=1, shrink-to-fit=no'
                        />
                    </Head>
                    <PrivateRoute>
                        <div
                            style={{
                                minHeight: '100vh',
                                overflowX: 'hidden',
                            }}
                        >
                            <CssBaseline />
                            <Component {...pageProps} />
                        </div>
                    </PrivateRoute>
                </ThemeProvider>
            </CacheProvider>
        </PersistGate>
    );
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
};

export default wrapper.withRedux(MyApp);
