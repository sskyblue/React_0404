import "./TaskItem.css";

function TaskItem({ task, toggleTask, removeTask }){
  return(
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleTask}
        className="task-checkbox"
      />
      <span className={task.completed ? "task-text completed" : "task-text"}>
        {task.text}
      </span>
      <button onClick={removeTask} className="task-remove-button">삭제</button>
    </li>
  );
}
export default TaskItem;