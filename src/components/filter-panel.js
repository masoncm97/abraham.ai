import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/filter-panel.module.scss";

export default function FilterPanel() {
  return (
    <div className={styles.panel_container}>
      <div className={styles.item_container}>
        <button className={styles.btn}>🏆</button>
        <h3 className={styles.label}>Best</h3>
      </div>
      <div className={styles.item_container}>
        <button className={styles.btn}>🔥</button>
        <h3 className={styles.label}>Hot</h3>
      </div>
      <div className={styles.item_container}>
        <button className={styles.btn}>⏱</button>
        <h3 className={styles.label}>New</h3>
      </div>
    </div>
  );
}
