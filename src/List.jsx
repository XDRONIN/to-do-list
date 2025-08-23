function List({ taskData, checked, onCheck }) {
  return (
    <>
      <div className="listElements">
        <p>TASK- {taskData}</p>
        <label className="container">
          <input type="checkbox" checked={checked} onChange={onCheck} />
          <div className="checkmark"></div>
        </label>
      </div>
    </>
  );
}

export default List;
