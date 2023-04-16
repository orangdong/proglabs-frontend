import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function useAuth(shouldRedirect) {
  const { data: session } = useSession();
  const { disconnect, connected, connect, select } = useWallet();
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const exp = new Date(session?.accessTokenExpiry);

    if (exp < Date.now()) {
      disconnect();
      signOut({ callbackUrl: "/", redirect: shouldRedirect });
    }

    // if (session?.isWalletConnected) {
    //   select(session?.walletName);
    //   connect();
    // }

    // if (router.route.includes("/dashboard") && !connected) {
    //   disconnect();
    //   router.replace("/");
    // }

    if (session === null) {
      disconnect();
      if (router.route.includes("/dashboard")) {
        router.replace("/");
      }
      setIsAuthenticated(false);
    } else if (session !== undefined) {
      setIsAuthenticated(true);
    }
  }, [session]);

  return isAuthenticated;
}
