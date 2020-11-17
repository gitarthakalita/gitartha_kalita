import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

                    <meta property="og:title" content="Gitartha Kalita" />
                    <meta property="og:description" content="Product Designer ,Product Developer, Entrepreneur" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://gitartha-kalita.vercel.app/" />

                    <meta property="og:image" content="https://www.site-shot.com/cached_image/dKldSh0DEeu_FAJCrBEABA" />
                    {/* <meta property="og:image" content="https://www.site-shot.com/cached_image/98EeXB0DEeuYXgJCrBEABQ" />*/}

                    <meta name="twitter:card" content="summary_large_image"></meta>
                    <meta property="twitter:domain" content="gitartha-kalita.vercel.app"></meta>
                    <meta property="twitter:url" content="https://gitartha-kalita.vercel.app/"></meta>
                    <meta name="twitter:title" content="Gitartha Kalita"></meta>
                    <meta name="twitter:description" content="Product Designer , Product Developer, Entrepreneur"></meta>
                    <meta name="twitter:image" content="https://www.site-shot.com/cached_image/98EeXB0DEeuYXgJCrBEABQ"></meta>


                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}