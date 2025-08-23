import List from "./List";
import Add from "./Add";
import HandleClick from "./HandleClick";
import { useState, useEffect } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  const handleClick = () => {
    setShowInput(true);
  };

  const hideInput = (taskData) => {
    setShowInput(false);
    fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: taskData, checked: false }),
    })
      .then((res) => res.json())
      .then((newTask) => {
        setTasks((prevTasks) => [...prevTasks, newTask]);
      });
  };

  const handleCheck = (id, checked) => {
    fetch(`http://localhost:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: !checked }),
    })
      .then((res) => res.json())
      .then((updatedTask) => {
        setTasks(
          tasks.map((task) => (task.id === id ? updatedTask : task))
        );
      });
  };

  return (
    <>
      <u>
        {" "}
        <center>
          <h1>To Do List</h1>
        </center>
      </u>

      <Add onClick={handleClick} />
      {showInput && <HandleClick onclick={hideInput} />}

      {tasks.map((task) => (
        <List
          key={task.id}
          taskData={task.task}
          checked={task.checked}
          onCheck={() => handleCheck(task.id, task.checked)}
        />
      ))}
    </>
  );
}

export default App;
