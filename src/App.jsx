import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { v4 } from "uuid";
function App() {
  const [tasks, setTasks] = useState([]);
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  function onAddTaskSubimit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-sky-600 to-[#2fd4bb] flex justify-center p-6 items-center font-[Inter_sans-serif]">
      <div className="max-w-[600px] min-w-[300px] space-y-4">
        <h1 className="text-5xl text-slate-100 text-center font-[100]">
          Gerenciador de tarefas
        </h1>

        <AddTask onAddTaskSubimit={onAddTaskSubimit} />
        {tasks.length > 0 && (
          <Tasks
            tasks={tasks}
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
          />
        )}
      </div>
    </div>
  );
}
export default App;
