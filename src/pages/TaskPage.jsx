import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-sky-600 to-[#2fd4bb] font-[Inter_sans-serif] ">
      <div>
        <Title>Detalhes da tarefa</Title>
        <div className="bg-slate-200 p-4 rounded-md shadow mt-4 w-[400px]">
          <h2 className="text-3xl text-left font-bold text-slate-800 capitalize">{title}</h2>
          <p className="text-slate-600 mt-10 ">{description}</p>
        </div>
        <button
        onClick={() => navigate(-1)} 
        className="w-[400px] mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-green-500 transition-colors duration-200 flex items-center justify-center">
          <ChevronLeftIcon/> Voltar
        </button>
      </div>
    </div>
  );
}
export default TaskPage;
