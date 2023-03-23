import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import "styles/fonts.scss";
import "styles/globals.css";
import { trpc } from "../utils/trpc";
import "styles/form.scss";
import { Lexend } from "@next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={lexend.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
