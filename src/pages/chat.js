import styles from "@/styles/chat.module.scss";
import { useState } from "react";

export default function Chat() {
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form submitted");
    setComment("");

    const prompt = {
      prompt: comment,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_LLM_API}/chat`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({prompt: comment,}),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div className={styles.panel_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="Field">
          <label>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
