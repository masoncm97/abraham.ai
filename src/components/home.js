import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.scss";
import Header from "./header";
import CreationItem from "@/components/creation-item";
import CreationsFeed from "./creations-feed";

export default function Home({ creations }) {
  const router = useRouter();

  return (
    <div className={styles.homeContainer}>
      {router.pathname === "/"}
      {creations == undefined && <h3>No creations to show</h3>}
      <CreationsFeed className={styles.creationsFeedContainer} creations={creations}/>
    </div>
  );
}
