import React, { useState } from "react";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(true); // default: text visible

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <h1>Hello, I am visible! 👋</h1>}
    </div>
  );
};

export default HideShow;
