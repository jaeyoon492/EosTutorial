import type { AppProps } from "next/app";

import "../../styles/globals.css";
import Layout from "../common/components/Layout/Layout.impl";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
