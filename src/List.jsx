function List({ taskData, taskDate }) {
  return (
    <>
      <div className="listElements">
        <p>{taskData}</p>
        <p>{taskDate}</p>
      </div>
      {console.log("List rendered")}
    </>
  );
}
//console.log(task.data);
//console.log(task.date);

export default List;
