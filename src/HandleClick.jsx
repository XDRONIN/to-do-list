import { useState } from "react";

const HandleClick = ({ onclick, setShowData }) => {
  const [taskData, setTaskData] = useState("");
  const [taskDate, setTaskDate] = useState("");

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
        <h3>
          <u>Enter Task Details</u>
        </h3>
        <input
          type="text"
          className="input"
          value={taskData}
          placeholder="Task details"
          onChange={(e) => {
            changeHandleData(e);
          }}
        ></input>
        <br />
        <input
          type="date"
          className="input"
          value={taskDate}
          onChange={(e) => {
            changeHandleDate(e);
          }}
        ></input>
        <br />
        <input
          type="submit"
          className="button"
          onClick={() => {
            onclick(taskData, taskDate);
          }}
        ></input>
      </div>
    </>
  );
};
export default HandleClick;
