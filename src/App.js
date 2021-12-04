import "./wdyr";

import React, { useState } from "react";
import "./style.css";
import Parent from "./components/Parent";
import DummyContext from "./DummyContext";

export default function App() {
  const [enabled, setEnabled] = useState(false);

  const handleSelectionChange = event => {
    setEnabled(!enabled);
  };

  return (
    <DummyContext.Provider value={enabled}>
      <h1>When does React (re-)render my component?</h1>
      <a href="https://mokkapps.de/blog/debug-why-react-re-renders-a-component/">
        Related blog post
      </a>
      <hr />
      <div className="d-flex align-items-center my-m">
        <input
          type="checkbox"
          className="mr-m"
          onChange={handleSelectionChange}
        />
        <label>Toggle Context API value which triggers a re-render)</label>
      </div>
      <Parent />
    </DummyContext.Provider>
  );
}
