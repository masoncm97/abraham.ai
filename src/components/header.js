import Link from "next/link";
import styles from "@/styles/header.module.scss";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <p>Abraham</p>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <ConnectButton />
          </li>
        </ul>
      </nav>
    </header>
  );
}
