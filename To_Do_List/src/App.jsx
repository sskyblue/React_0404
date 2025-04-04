import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import "./App.css";

function App(){
  const [tasks, setTasks] = useState([]);

const addTask = (taskText) =>{
    if (taskText.trim() === "") return;
    setTasks([...tasks, { text: taskText, completed: false }]);
  };

const toggleTask = (index) =>{
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
 };

const removeTask = (index) =>{
    setTasks(tasks.filter((_, i) => i !== index));
};

return(
    <div className="app-container">
      <h2 className="title">To-Do List</h2>
      <TaskInput addTask={addTask} />
      <TaskList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </div>
  );
}

export default App;