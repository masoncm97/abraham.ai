import styles from "@/styles/chat.module.scss";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("")
  const [sent, setSent] = useState([])
  const [received, setReceived] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("form submitted");
    setSent((prevState) => ([...prevState, input ]))
    setInput("");
    const prompt = {
      prompt: input,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_LLM_API}/chat`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({prompt: input,}),
    })
      .then((response) => response.json())
      .then((data) => setReceived((prevState) => ([...prevState, data.response ])));


  };

  return (
    <div className={styles.panel_container}>
      {sent?.map((sentItem) => (
        <p key={Math.random()}>{sentItem}</p>
      ))}
      {received?.map((receivedItem) => (
        <p key={Math.random()}>{receivedItem}</p>
      ))}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className="Field">
          <label>Input:</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
