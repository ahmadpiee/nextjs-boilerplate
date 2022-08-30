import * as React from 'react';
import Document, { Html, Main, NextScript, Head } from 'next/document';
import { ServerStyleSheets } from '@mui/styles';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from '@components/global';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='id'>
                <Head>
                    <meta name='application-name' content='PWA App' />
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta
                        name='apple-mobile-web-app-status-bar-style'
                        content='default'
                    />
                    <meta name='apple-mobile-web-app-title' content='PWA App' />
                    <meta
                        name='description'
                        content='Best PWA App in the world'
                    />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <meta
                        name='msapplication-config'
                        content='/icons/browserconfig.xml'
                    />
                    <meta name='msapplication-TileColor' content='#2B5797' />
                    <meta name='msapplication-tap-highlight' content='no' />
                    <meta name='theme-color' content='#000000' />

                    <link
                        rel='apple-touch-icon'
                        href='/icons/touch-icon-iphone.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='152x152'
                        href='/icons/touch-icon-ipad.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='180x180'
                        href='/icons/touch-icon-iphone-retina.png'
                    />
                    <link
                        rel='apple-touch-icon'
                        sizes='167x167'
                        href='/icons/touch-icon-ipad-retina.png'
                    />

                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='/icons/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='/icons/favicon-16x16.png'
                    />
                    <link rel='manifest' href='/manifest.json' />
                    <link
                        rel='mask-icon'
                        href='/icons/safari-pinned-tab.svg'
                        color='#5bbad5'
                    />
                    <link rel='shortcut icon' href='/favicon.ico' />
                    <link
                        rel='stylesheet'
                        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500'
                    />

                    <meta name='twitter:card' content='summary' />
                    <meta name='twitter:url' content='https://yourdomain.com' />
                    <meta name='twitter:title' content='PWA App' />
                    <meta
                        name='twitter:description'
                        content='Best PWA App in the world'
                    />
                    <meta
                        name='twitter:image'
                        content='https://yourdomain.com/icons/android-chrome-192x192.png'
                    />
                    <meta name='twitter:creator' content='@DavidWShadow' />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='PWA App' />
                    <meta
                        property='og:description'
                        content='Best PWA App in the world'
                    />
                    <meta property='og:site_name' content='PWA App' />
                    <meta property='og:url' content='https://yourdomain.com' />
                    <meta
                        property='og:image'
                        content='https://yourdomain.com/icons/apple-touch-icon.png'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.googleapis.com'
                    />
                    <link
                        rel='preconnect'
                        href='https://fonts.gstatic.com'
                        crossOrigin='true'
                    />
                    <link
                        href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                        rel='stylesheet'
                    />
                    {/* Inject MUI styles first to match with the prepend: true configuration. */}
                    {this.props.emotionStyleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Render app and page and get the context of the page with collected side effects.
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) =>
                sheets.collect(<App emotionCache={cache} {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    };
};
