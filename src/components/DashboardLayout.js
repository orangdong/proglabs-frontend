import useAuth from "@/lib/useAuth";
import Head from "next/head";

export default function DashboardLayout({ title, children }) {
  const isAuthenticated = useAuth(true);
  return (
    <>
      <Head>
        <title>{`Proglabs | ${title}`}</title>
        <meta name="description" content="Enchance your learning experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>{children}</main>
    </>
  );
}
