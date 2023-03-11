import Head from "next/head";
import { useRouter } from "next/router";
import styles from "@/styles/creations-feed.module.scss";
import Header from "./header";
import CreationItem from "@/components/creation-item";

export default function CreationsFeed({ creations }) {
  const router = useRouter();

  return (
    <div className={styles.creationsFeed}>
      {creations == undefined && <h3>No creations to show</h3>}
      {creations?.map((creation) => (
        <CreationItem key={creation._id} creation={creation} />
      ))}
    </div>
  );
}
