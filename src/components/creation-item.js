import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/creation-item.module.scss";

export default function CreationtItem({ creation }) {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        {creation.uri && (
          <Image
            src={creation.uri}
            width={300}
            height={300}
            alt={creation.name || "Creation"}
          />
        )}
      </div>
      <div className={styles.description}>
          {creation.name}
      </div>
    </div>
  );
}
