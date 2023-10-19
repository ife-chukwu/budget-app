import  { useState } from "react";

export const Insight = () => {
  const [progress, setProgress] = useState(0);

  const updateProgressBar = () => {
    setProgress(progress + 5);
  };

  return (
    <div className="pt-40">
      <button onClick={updateProgressBar}>Click me</button>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: "#ddd",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#4caf50",
          }}
        ></div>
      </div>
    </div>
  );
};
