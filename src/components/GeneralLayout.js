import Navbar from "./Molecules/Navbar";
import Footer from "./Molecules/Footer";
import Head from "next/head";
import useAuth from "@/lib/useAuth";

export default function GeneralLayout({
  title,
  isHome = false,
  children,
  courses,
}) {
  const isAuthenticated = useAuth(false);
  return (
    <>
      <Head>
        <title>{`Proglabs | ${title}`}</title>
        <meta name="description" content="Enchance your learning experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Navbar course={courses} />
        {children}
        <Footer isHome={isHome} />
      </main>
    </>
  );
}
