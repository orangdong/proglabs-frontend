import Head from "next/head";
import Navbar from "@/components/Molecules/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Proglabs</title>
        <meta name="description" content="Enchance your learning experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ height: "1000px" }}>
        <Navbar />
        This is home page
      </main>
    </>
  );
}
