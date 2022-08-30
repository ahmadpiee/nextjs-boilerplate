import PropTypes from 'prop-types';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store, wrapper } from '@redux/store';

function MyApp({ Component, pageProps }) {
    return (
        <PersistGate persistor={persistor} loading={null}>
            <Component {...pageProps} />
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
