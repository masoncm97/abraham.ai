import { EdenClient } from "eden-sdk"
import Layout from "@/components/layout"
import CreationItem from '@/components/creation-item'

let filter = {
  username: "0x2823d234473815D34B734E87b6FCbed4d783B3Dc",
  limit: 50,
};
export default function Home({json}) {
    const creations = JSON.parse(json);
    console.log(creations)
    return (
      <Layout>
        {creations.length === 0 && <h3>No events to show</h3>}
        {creations.map((creation) => (
          <CreationItem key={creation._id} creation={creation} />
        ))}
        <p>Lit</p>
      </Layout>
    );
}

export async function getServerSideProps() {
  let eden = new EdenClient();
  let result = await eden.getCreations(filter);
  console.log(result);
  let json = JSON.stringify(result);
  return { props: { json } };
}
