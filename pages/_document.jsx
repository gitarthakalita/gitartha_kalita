import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                    <meta property="og:title" content="Gitartha Kalita" />
                    <meta property="og:description" content="Product Designer , Product Developer, Entrepreneur" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://gitartha-kalita.vercel.app/" />

                    {/* <meta property="og:image" content="https://www.site-shot.com/dKldSh0DEeu_FAJCrBEABA" /> */}
                    <meta property="og:image" content="https://www.site-shot.com/98EeXB0DEeuYXgJCrBEABQ" />                    
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:image:alt" content="Gitartha Kalita" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}