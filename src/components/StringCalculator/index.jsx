import React from "react";
import './styles.scss'

const StringCalculator = () => {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="calculator-main">
      <div className="calculator-section">
        <input
          className="input-field"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button className="calc-btn">Calculate</button>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default StringCalculator;
