import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

function CustomHookExample2() {
  // localstorage needs a key to store a value
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();
    const taskObj = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObj]);
  };
  return (
    <>
      <form onSubmit={onSubmit} class="w-50">
        <div className="mb-3">
          <label className="form-label">Task</label>
          <input
            className="form-control"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {tasks.map((task) => (
        <h3 id={task.date}>{task.task}</h3>
      ))}
    </>
  );
}

export default CustomHookExample2;
