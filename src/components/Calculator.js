import { motion } from "framer-motion";
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    if (value === "C") {
      setInput("");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Error");
      }
    } else {
      setInput(input + value);
    }
  };

  const buttonVariants = {
    press: { scale: 0.9 },
    release: { scale: 1 },
  };

  const buttons = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "C", "="
  ];

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        {buttons.map((btn, index) => (
          <motion.button
            key={index}
            className="button"
            onClick={() => handleClick(btn)}
            variants={buttonVariants}
            whileTap="press"
            initial="release"
            animate="release"
          >
            {btn}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
