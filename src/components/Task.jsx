import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {
  const navigate = useNavigate();
  function onSeeDetailsClick(task){
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?title=${query.toString()}`);
  }

  return (
    <ul className="space-y-2 p-6 rounded-md shadow bg-slate-200">
      {tasks.map((task) => (
        <li key={task.id} className="flex">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white p-2 rounded-md text-left ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button
          onClick = {()=> onSeeDetailsClick(task)}
          className="bg-slate-400 p-2 text-white rounded-md ml-2">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 text-white rounded-md ml-2"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;
