import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/creation-item.module.scss";

export default function CreationtItem({ creation }) {
  console.log(creation.name, creation.uri);
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        {creation.uri && (
          <Image
            src={creation.uri}
            width={170}
            height={100}
            alt={creation.name || "Creation"}
          />
        )}
      </div>
    </div>
  );
}
