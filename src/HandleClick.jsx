import { useState } from "react";
import List from "./List";

const HandleClick = ({ onclick }) => {
  const [taskData, setTaskData] = useState("");
  const [taskDate, setTaskDate] = useState("");
  function changeHandleData(e) {
    setTaskData(e.target.value);
    console.log(taskData);
  }
  function changeHandleDate(e) {
    setTaskDate(e.target.value);
    console.log(taskDate);
  }
  function setList(taskData, taskDate) {
    const task = {
      data: taskData,
      date: taskDate,
    };
    <List tasks={task} />;
  }
  return (
    <>
      <div className="inputData">
        <input
          type="text"
          placeholder="Task details"
          value={taskData}
          onChange={(e) => {
            changeHandleData(e);
          }}
        ></input>
        <br />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => {
            changeHandleDate(e);
          }}
        ></input>
        <br />
        <input
          type="submit"
          onClick={() => {
            onclick(), setList(taskData, taskDate);
          }}
        ></input>
      </div>
    </>
  );
};
export default HandleClick;
