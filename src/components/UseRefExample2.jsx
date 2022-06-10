import React, { useEffect, useState, useRef } from "react";

function UseRefExample2() {
  const [name, setName] = useState("");
  // const renders = useRef(1); // not linked to DOM
  // const prevName = useRef(""); //Previous State

  // useEffect(() => {
  //   renders.current += 1; // do not need a dependency
  //   prevName.current = name; // the state you wanna get the previous state
  // }, [name]); // every time the name changes this function runs

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    setName("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* <h4>Renders:{renders.current}</h4>
        <h4>Prev Name State: {prevName.current}</h4> */}
        <label htmlFor="inputtext">Input</label>
        <input
          type="text"
          id="inputtext"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control mb-3"
        />
        <button className="btn btn-secondary" type="submit">
          Submit
        </button>
      </form>
      {name}
    </div>
  );
}

export default UseRefExample2;
