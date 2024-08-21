import React from "react";
import "./styles.scss";
import { add } from "./calculate";

const StringCalculator = () => {
  const [input, setInput] = React.useState("");
  const [result, setResult] = React.useState(0);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    try {
      const calculated = add(input)
      console.log("🚀 ~ handleCalculate ~ calculated:", calculated)
      setResult(calculated);
    } catch (error) {
      setResult(error.message);
    }
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
        <button onClick={handleCalculate} className="calc-btn">
          Calculate
        </button>
        <p>Result: {result}</p>
      </div>
    </div>
  );
};

export default StringCalculator;
