import { EdenClient } from "eden-sdk";
import Layout from "@/components/layout";
import CreationItem from "@/components/creation-item";

let filter = {
  username: "0x2823d234473815D34B734E87b6FCbed4d783B3Dc",
  limit: 50,
};

export default function Home({ filteredJson }) {
  const creations = JSON.parse(filteredJson);
  return (
    <Layout>
      {creations.length === 0 && <h3>No creations to show</h3>}
      {creations.map((creation) => (
        <CreationItem key={creation._id} creation={creation} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  let eden = new EdenClient();
  let result = await eden.getCreations(filter);
  const filteredJson = JSON.stringify(
    result.filter((creation) => /\.(jpg|png)$/.test(creation.uri))
  );
  return { props: { filteredJson } };
}
