import TaskItem from "./TaskItem";
import "./TaskList.css";

export default function TaskList({ tasks, toggleTask, removeTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          toggleTask={() => toggleTask(index)}
          removeTask={() => removeTask(index)}
        />
      ))}
    </ul>
  );
}