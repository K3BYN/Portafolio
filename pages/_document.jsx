import { Html, Head, Main, NextScript } from 'next/document'

export default MyDocument = () => {
  
  return (
    <Html>
      <Head>
        <title> My Portfolio </title>
        <link rel="shortcut icon" href="icon.jpg" />
        <meta
          name="description"
          content="Kevin Hernández Portfolio website"
        />
      </Head>
      <body>
        
          <Main />
          <NextScript />
        
      </body>
    </Html>
  );
}

MyDocument.getInitialProps =  async(ctx) => {
  const initialProps = await Document.getInitialProps(ctx)
  return {...initialProps}
}