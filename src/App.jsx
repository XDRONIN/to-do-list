import List from "./List";
import Add from "./Add";
import HandleClick from "./HandleClick";
import { useState } from "react";

function App() {
  const [taskData, setTaskData] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const [showInput, setShowInput] = useState(false);
  const [showData, setShowData] = useState(false);

  const handleClick = () => {
    setShowInput(true);
  };
  const hideInput = () => {
    setShowInput(false);
    //console.log(`${taskData} app`);
  };

  return (
    <>
      <u>
        {" "}
        <h1>To Do List</h1>
      </u>

      <Add onClick={handleClick} />
      {showInput && (
        <HandleClick
          onclick={hideInput}
          setShowData={setShowData}
          SetTaskData={setTaskData}
          SetTaskDate={setTaskDate}
        />
      )}
      {showData && <List taskData={taskData} taskDate={taskDate} />}
    </>
  );
}

export default App;
