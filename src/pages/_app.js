import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/styles/theme";
import LoadingBar from "@/components/Atoms/LoadingBar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { WalletWrapper } from "@/components/Wrappers/WalletWrapper";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };
    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <LoadingBar
        isRouteChanging={state.isRouteChanging}
        key={state.loadingKey}
      />
      <SessionProvider session={pageProps.session}>
        <WalletWrapper>
          <Component {...pageProps} />
        </WalletWrapper>
      </SessionProvider>
    </ChakraProvider>
  );
}
