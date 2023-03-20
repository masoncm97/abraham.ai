import styles from "@/styles/chat-item.module.scss";

export default function ChatItem({messageType, message}) {

  return (
    <div className={`${styles.container} ${styles[messageType]}`}>
        <p>{message}</p>
    </div>
  );
}
