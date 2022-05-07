import { ThirdwebProvider } from "@3rdweb/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../components/layout";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const supportedChainIds = [80001];
  const connectors = {
    injected: {},
  };

  return (
    <>
      <Head>
        <title>{pageProps.title}</title>
      </Head>
      <ThirdwebProvider
        connectors={connectors}
        supportedChainIds={supportedChainIds}
      >
        <Layout title={pageProps.title}>
          <Component {...pageProps} />
        </Layout>
      </ThirdwebProvider>
    </>
  );
}
