import List from "./List";
import Add from "./Add";
import HandleClick from "./HandleClick";
import { useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const handleClick = () => {
    setShowInput(true);
  };
  return (
    <>
      <u>
        {" "}
        <h1>To Do List</h1>
      </u>
      <List />
      <Add onClick={handleClick} />
      {showInput && <HandleClick />}
    </>
  );
}

export default App;
