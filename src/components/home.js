import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/home.module.scss";
import FilterPanel from "./filter-panel";
import CreationsFeed from "./creations-feed";
import About from "./about";

export default function Home({ creations }) {
  const router = useRouter();

  return (
    <div className={styles.homeContainer}>
      {router.pathname === "/"}
      {creations == undefined && <h3>No creations to show</h3>}
      <FilterPanel />
      <CreationsFeed className={styles.creationsFeedContainer} creations={creations}/>
      <About />
    </div>
  );
}
