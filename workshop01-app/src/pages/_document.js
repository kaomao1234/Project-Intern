import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body style={{ fontFamily: "Kanit"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
