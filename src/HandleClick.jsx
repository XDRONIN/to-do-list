import { useState } from "react";

const HandleClick = ({ onclick }) => {
  const [taskData, setTaskData] = useState("");

  function changeHandleData(e) {
    setTaskData(e.target.value);
  }

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
          type="submit"
          className="button"
          onClick={() => {
            onclick(taskData);
          }}
        ></input>
      </div>
    </>
  );
};
export default HandleClick;
