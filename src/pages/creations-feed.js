import { useRouter } from 'next/router';
import styles from '@/styles/creations-feed.module.scss';
import CreationItem from '@/components/creation-item';
// import { EdenClient } from 'eden-sdk';

let filter = {
  username: '0x2823d234473815D34B734E87b6FCbed4d783B3Dc',
  limit: 50,
};

export default function CreationsFeed({ creations }) {
  return (
    <div className={styles.container}>
      {creations == undefined && <h3>No creations to show</h3>}
      {creations?.map((creation) => (
        <CreationItem key={creation._id} creation={creation} />
      ))}
    </div>
  );
}
