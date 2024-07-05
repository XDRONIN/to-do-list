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
          onClick={(e) => {
            onclick();
          }}
        ></input>
      </div>
    </>
  );
};
export default HandleClick;
