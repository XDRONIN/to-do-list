import { useState } from "react";
import List from "./List";

const HandleClick = ({ onclick, setShowData, SetTaskData, SetTaskDate }) => {
  const [taskData, setTaskData] = useState("");
  const [taskDate, setTaskDate] = useState("");
  function set() {
    SetTaskData(taskData);
    SetTaskDate(taskDate);
    //console.log(`${taskData} Handle click`);
  }
  function changeHandleData(e) {
    setTaskData(e.target.value);
    //console.log(taskData);
  }
  function changeHandleDate(e) {
    setTaskDate(e.target.value);
    //console.log(taskDate);
  }
  //function setList(taskData, taskDate) {
  //const task = {
  // data: taskData,
  // date: taskDate,
  //};
  //  }

  return (
    <>
      <div className="inputData">
        <input
          type="text"
          value={taskData}
          placeholder="Task details"
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
            onclick(), setShowData(true), set();
          }}
        ></input>
      </div>
    </>
  );
};
export default HandleClick;
