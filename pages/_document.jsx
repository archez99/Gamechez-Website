import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/Gamechez2.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="Sunucunda Eğlenceye Gamechez Sayesinde Dur Deme! Hemen Sunucuna Ekle"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Gamechez" />
          <meta name="twitter:creator" content="@Gamechez" />
          <meta property="og:url" content="https://gamechez.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gamechez" />
          <link
            rel="icon"
            href="/img/Gamechez2.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="Sunucunda Eğlence Olmasınmı? Ekonomi, Eğlence İçin Gamechez!"
          />
          <meta property="og:image" content="/img/Gamechez2.jpg" />
          <meta property="og:image:alt" content="Gamechez" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Gamechez"
          />
          <meta name="theme-color" content="#087ddd" />
          <link rel="icon" href="/img/Gamechez2.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
