import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {

        return (
            <Html lang="en">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                    <meta property="og:title" content="Gitartha Kalita" />
                    <meta property="og:type" content="Website Development" />

                    <meta property="og:image" content="https://example.com/ogp.jpg" />
                    <meta property="og:image:secure_url" content="https://secure.example.com/ogp.jpg" />
                    <meta property="og:image:type" content="image/jpeg" />
                    <meta property="og:image:width" content="400" />
                    <meta property="og:image:height" content="300" />
                    <meta property="og:image:alt" content="A shiny red apple with a bite taken out" />

                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>

            </Html>
        )
    }
}