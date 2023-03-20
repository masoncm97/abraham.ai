import ChatItem from "@/components/chat-item";
import styles from "@/styles/chat.module.scss";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prevState) => [
      ...prevState,
      { message: input, messageType: "sent" },
    ]);
    setInput("");
    const prompt = {
      prompt: input,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_LLM_API}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input }),
    })
      .then((response) => response.json())
      .then((data) =>
        setMessages((prevState) => [
          ...prevState,
          { message: data.response, messageType: "received" },
        ])
      );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>Chat</div>
      <div className={styles.chatWindow}>
        {messages?.map((sentItem) => (
          <ChatItem
            key={Math.random()}
            message={sentItem.message}
            messageType={sentItem.messageType}
          />
        ))}
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="Field">
          <textarea
            value={input}
            className={styles.textArea}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
