import Navbar from "./Molecules/Navbar";
import Footer from "./Molecules/Footer";
import Head from "next/head";

export default function GeneralLayout({ title, isHome = false, children }) {
  return (
    <>
      <Head>
        <title>Proglabs | {title}</title>
        <meta name="description" content="Enchance your learning experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navbar />
        {children}
        <Footer isHome={isHome} />
      </main>
    </>
  );
}
