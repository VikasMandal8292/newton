import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState("");
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleClick = () => {
    setText(text + count);
    setCount(" ");
  };

  return (
    <div className="App">
      <input id="input" value={count} onChange={handleChange} />
      <p>Concated String</p>
      <p id="text">{text}</p>
      <button id="button" onClick={handleClick}>
        click me
      </button>
    </div>
  );
}
