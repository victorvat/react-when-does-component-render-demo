import React, { useState, useContext } from "react";
import "../style.css";

const Child = props => {
  const [lastName, setLastName] = useState("");
  const [counter, setCounter] = useState(0);
  const [address, setAddress] = useState({
    postalCode: 81375,
    street: "Auenweg 1"
  });

  const { name, id } = props;

  const handleChange = event => {
    setLastName(event.target.value);
  };

  const onKeyPress = event => {
    if (event.key === "Enter") {
      console.log("Set last name with value", event.target.value);
      setLastName(event.target.value);
    }
  };

  console.warn(`RENDERED -> Child with props`, props);
  return (
    <div className={`child-container`}>
      <p>
        I am a child{" "}
        {name
          ? `with first name "${name}" from props"`
          : "with no first name via props"}{" "}
        and last name from state is {lastName ? lastName : "not set"}
      </p>
      <label>
        Last Name (modify to trigger state change in Child):
        <input
          className="ml-m"
          type="text"
          value={lastName}
          onChange={handleChange}
          onKeyDown={onKeyPress}
        />
      </label>
      <hr />
      <p>State counter: {counter}</p>
      <button onClick={() => setCounter(counter)}>
        Update internal counter state with old counter value (⚠️ triggers no
        re-render)
      </button>
      <button onClick={() => setCounter(counter + 1)}>
        Increment internal counter (⚠️ triggers re-render)
      </button>
      <hr />
      <p>Address object: {JSON.stringify(address)}</p>
      <button
        onClick={() =>
          setAddress({
            postalCode: 81375,
            street: "Auenweg 1"
          })
        }
      >
        Update adress state with same object (⚠️ triggers re-render)
      </button>
    </div>
  );
};

Child.whyDidYouRender = false

export default Child;
