import { useState } from "react";
import "./TaskInput.css";

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="할 일을 입력하세요"
        className="task-input-field"
      />
      <button type="submit" className="task-add-button">추가</button>
    </form>
  );
}

export default TaskInput;