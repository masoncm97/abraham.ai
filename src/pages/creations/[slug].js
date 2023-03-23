import Layout from '@/components/layout';
import styles from '@/styles/creation-page.module.scss';

export default function CreationPage({ creation }) {
  console.log(creation);
  return (
    <Layout>
      <div className={styles.creationItem_container}></div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch('http://localhost:3000/api/eden/creations');
//   const data = await res.json();
//   const creations = JSON.parse(data.props);

//   // Generate a path for each creation
//   const paths = creations.map((creation) => ({
//     params: { slug: creation._id },
//   }));
//   console.log(paths);

//   return { paths, fallback: false };
// }

// export async function getStaticProps({ params: { slug } }) {
//   console.log(slug);
//   const res = await fetch(`http://localhost:3000/api/eden/creation/${slug}`);
//   const creation = await res.json();

//   console.log(creation);
//   return { props: { creation: creation } };
// }

export async function getServerSideProps({ params: { slug } }) {
  const res = await fetch(`http://localhost:3000/api/eden/creation/${slug}`);
  const creation = await res.json();
  return {
    props: { creation: creation }, // will be passed to the page component as props
  };
}
