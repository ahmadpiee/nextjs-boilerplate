import PropTypes from 'prop-types';
import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, wrapper } from '@redux/store';
import { theme, createEmotionCache } from '@components/global';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { isNotDevelopment } from '@utils/helpers/envProcess';
import WithPrivateRoute from '@utils/helpers/WithPrivateRoute';

const clientSideEmotionCache = createEmotionCache();

const DisableConsole = () => {
    if (isNotDevelopment) {
        return (console.log = function () {});
    }
}; // make sure all console disabled in production

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
                    <WithPrivateRoute>
                        <div
                            style={{
                                minHeight: '100vh',
                                overflowX: 'hidden',
                            }}
                        >
                            <CssBaseline />
                            <Component {...pageProps} key={DisableConsole()} />
                        </div>
                    </WithPrivateRoute>
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
