import React, { useState, useCallback } from "react";

function UseCallbackExample() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => {
      return [...prevState, "Some Task"];
    });
  }, [setTasks]);

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log("Botton rendered");
  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>{" "}
    </div>
  );
});

export default UseCallbackExample;
