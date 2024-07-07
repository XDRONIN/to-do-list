function List({ taskData, taskDate }) {
  return (
    <>
      <div className="listElements">
        <p>TASK- {taskData}</p>
        <p>COMPLETE BY- {taskDate}</p>
        <label class="container">
          <input type="checkbox" />
          <div class="checkmark"></div>
        </label>
      </div>
      {console.log("List rendered")}
    </>
  );
}
//console.log(task.data);
//console.log(task.date);

export default List;
