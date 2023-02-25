import "@/styles/globals.scss";
import WalletProvider from "../providers/wallet-provider";

export default function App({ Component, pageProps }) {
  return (
    <WalletProvider>
      <Component {...pageProps} />
    </WalletProvider>
  );
}
