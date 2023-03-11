import "@/styles/styles.scss";
import WalletProvider from "../providers/wallet-provider";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}
