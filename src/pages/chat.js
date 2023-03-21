import ChatItem from "@/components/chat-item";
import styles from "@/styles/chat.module.scss";
import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const chatWindowRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages((prevState) => [
      ...prevState,
      { message: input, messageType: "sent" },
    ]);
    setInput("");

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

  function handleButtonClick() {
    setIsCollapsed(prevCollapsed => !prevCollapsed);
  }

  useEffect(() => {
    console.log(chatWindowRef);
    //  chatWindowRef.current.scrollIntoView({ behavior: "smooth" })
    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className={`${styles.container} ${isCollapsed ? styles.collapsed : styles.expanded}`}>
      <div className={styles.header}>
        <h3 className={styles.header_title}>Chat</h3>
        <button className={styles.header_button} onClick={handleButtonClick}>{isCollapsed ? 'Expand' : 'Collapse'}</button>
      </div>
      <div className={styles.chatWindow} ref={chatWindowRef}>
        {messages?.map((sentItem) => (
          <ChatItem
            key={Math.random()}
            message={sentItem.message}
            messageType={sentItem.messageType}
          />
        ))}
      </div>
      <form className={`${styles.form}`} onSubmit={handleSubmit}>
        <textarea
          value={input}
          placeholder="The artist is in..."
          className={styles.textArea}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "The artist is in...")}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className={`${styles.btn}`} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
