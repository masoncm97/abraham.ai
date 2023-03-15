import { useRouter } from "next/router";
import styles from "@/styles/creations-feed.module.scss";
import CreationItem from "@/components/creation-item";

let filter = {
    username: "0x2823d234473815D34B734E87b6FCbed4d783B3Dc",
    limit: 50,
};

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

// export async function getServerSideProps() {
//     let eden = new EdenClient();
//     let result = await eden.getCreations(filter);
//     const filteredJson = JSON.stringify(
//       result.filter((creation) => /\.(jpg|png)$/.test(creation.uri))
//     );
//     return { props: { filteredJson } };
//   }
