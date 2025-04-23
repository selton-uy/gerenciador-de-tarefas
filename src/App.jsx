import Tasks from "./components/Task";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";
function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  /*Caso queira pegar as tarefas de uma api
  useEffect(() => {
    //Chamar Api
    const fetchTasks = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10", {
        method: "GET",
      });
      //Pegar dados que ela retorna
      const data = await response.json();
      //Armazenar/ persistir os dados no state
      setTasks(data);
    };
    fetchTasks();
  });*/

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
    <div className="w-screen h-screen bg-gradient-to-b from-sky-600 to-[#2fd4bb] flex justify-center p-6 items-center ">
      <div className="max-w-[600px] min-w-[300px] space-y-4">
        <Title>Gerenciador de tarefas</Title>
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
