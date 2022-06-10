import { useRef } from "react";

function UseRefExample4() {
  const pararef = useRef();

  const Toggle = () => {
    pararef.current.innerText = "Submitted";
  };

  return (
    <div>
      <br />
      <button onClick={Toggle}>Submit</button>
      <p ref={pararef}>Hello</p>
    </div>
  );
}

export default UseRefExample4;
