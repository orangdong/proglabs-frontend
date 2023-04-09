import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const nextAuthOptions = (req, res) => {
  return {
    providers: [
      CredentialsProvider({
        id: "wallet-login",
        type: "credentials",
        credentials: {},
        async authorize(credentials) {
          try {
            // Authenticate user with credentials
            const { publicKey, signature, walletName } = credentials;

            const user = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/v1/login`,
              {
                method: "POST",
                body: JSON.stringify({
                  publicKey,
                }),
                headers: {
                  "Content-Type": "application/json",
                  "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
                  "x-auth-signature": signature,
                },
              }
            )
              .then((response) => response.json())
              .then((data) => data)
              .catch(console.error);

            if (user.data.accessToken) {
              return {
                walletName,
                ...user,
              };
            }

            return null;
          } catch (e) {
            throw new Error(e);
          }
        },
      }),
    ],
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) {
          // This will only be executed at login. Each next invocation will skip this part.
          token.accessToken = user.data.accessToken;
          token.accessTokenExpiry = user.data.accessTokenExpiry;
          token.user = user.data.user;
          token.isWalletConnected = true;
          token.walletName = user.walletName;
          //   token.refreshToken = user.data.refreshToken;
        }

        // If accessTokenExpiry is 24 hours, we have to refresh token before 24 hours pass.
        // const shouldRefreshTime = Math.round(
        //   token.accessTokenExpiry - 60 * 60 * 1000 - Date.now()
        // );

        // If the token is still valid, just return it.
        // if (shouldRefreshTime > 0) {
        //   return Promise.resolve(token);
        // }

        // If the call arrives after 23 hours have passed, we allow to refresh the token.
        // token = refreshAccessToken(token);
        return Promise.resolve(token);
      },
      session: async ({ session, token }) => {
        // Here we pass accessToken to the client to be used in authentication with your API
        session.accessToken = token.accessToken;
        session.accessTokenExpiry = token.accessTokenExpiry;
        session.user = token.user;
        session.isWalletConnected = token.isWalletConnected;
        session.walletName = token.walletName;
        // session.error = token.error;

        return Promise.resolve(session);
      },
    },
    secret: process.env.JWT_SECRET,
  };
};

const Auth = (req, res) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};

export default Auth;
