import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="icons/favicon-16x16.png"
        />
        <link rel="manifest" href="icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        <title>Aman Seguros</title>
      </Head>
      <Nav />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
}
