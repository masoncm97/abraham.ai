import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/creation-item.module.scss';

export default function CreationtItem({ creation }) {
  return (
    <div className={styles.creationItem_container}>
      <div className={styles.reaction_container}>
        <button className={styles.reaction_btn}>👏</button>
        <button className={styles.reaction_btn}>👍</button>
        <button className={styles.reaction_btn}>👎</button>
      </div>
      <div className={styles.img}>
        {creation.uri && (
          <Image
            src={creation.uri}
            width={300}
            height={300}
            alt={creation.name || 'Creation'}
          />
        )}
      </div>
      <div className={styles.description}>{creation.name}</div>
      <Link href={`/creations/${creation._id}`}>
        <p className='btn'>Expand</p>
      </Link>
    </div>
  );
}
