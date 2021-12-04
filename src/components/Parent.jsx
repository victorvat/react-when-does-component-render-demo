import React, { useState, useContext } from "react";
import "../style.css";
import Child from "./Child";

const Parent = () => {
  const [name, setName] = useState("Mike");
  const [unusedCounter, setUnusedCounter] = useState(0);

  const handleChange = event => {
    setName(event.target.value);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      console.log("Set name with value", event.target.value);
      setName(event.target.value);
    }
  };

  console.warn("RENDERED -> Parent");
  return (
    <div className="parent-container">
      <p>I am the parent component</p>
      <div className="d-flex flex-col">
        <label>
          Name (passed via props to children):
          <input
            type="text"
            className="ml-m"
            value={name}
            onChange={handleChange}
            onKeyDown={onKeyPress}
          />
        </label>
        <button
          className="mt-m"
          z
          onClick={() => setUnusedCounter(unusedCounter + 1)}
        >
          Trigger state change which is not referenced in JSX
        </button>
      </div>
      <Child />
      <Child id="any-id" name={name} />
    </div>
  );
};

Parent.whyDidYouRender = false;

export default Parent;
