import { EdenClient } from "eden-sdk";
import Layout from "@/components/layout";
import Home from "./home";
let filter = {
  username: "0x2823d234473815D34B734E87b6FCbed4d783B3Dc",
  limit: 50,
};

export default function Abraham({ filteredJson }) {
  const creations = JSON.parse(filteredJson);
  return (
    <Layout>
      <Home creations={creations}/>
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
