import List from "./List";
import Add from "./Add";
import HandleClick from "./HandleClick";
import { useState } from "react";

function App() {
  //const [taskData, setTaskData] = useState("");
  //const [taskDate, setTaskDate] = useState("");

  const [showInput, setShowInput] = useState(false);
  //const [showData, setShowData] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleClick = () => {
    setShowInput(true);
  };
  const hideInput = (taskData, taskDate) => {
    setShowInput(false);
    //setTaskData(taskData);
    // setTaskDate(taskDate);
    setTasks((prevTasks) => [...prevTasks, { taskData, taskDate }]);
    //console.log(`${taskData} app`);
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

      {tasks.map((task, index) => (
        <List key={index} taskData={task.taskData} taskDate={task.taskDate} />
      ))}
    </>
  );
}

export default App;
