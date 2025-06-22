import TaskList from "./TaskList";
import { tasklist } from "./Tasks";
export default function Main() {
    const tasks = tasklist.map(task => {
        return <TaskList 
        task={task.task}
        key={task.id}
        completed={task.completed}
        />
    })

  return (
    <main className="px-40 py-5">
      <h1 className="font-inter font-bold text-3xl px-4 pt-5 pb-3 text-center text-[#0D141C]">
        My Tasks
      </h1>
      <form>
        <div className="px-4 py-3 w-[480px] h-20">
          <input
            type="text"
            name="addTask"
            placeholder="Add a new task"
            className="w-[448px] h-[56px] bg-[#F7FAFC] p-[15px] placeholder:text-[#4A739C] outline-none border border-[#CFDBE8] rounded-xl"
          />
        </div>
        <div className="px-4 py-3 flex items-center justify-center">
          <button
            type="button"
            className="px-4 bg-[#0D80F2] rounded-xl text-[#F7FAFC] text-sm font-inter h-10 w-24"
          >
            Add Task
          </button>
        </div>
      </form>

      <div className="flex justify-start gap-10 pb-3 px-4">
        <button className="font-inter text-sm text-[#4A739C] focus:text-[#0D141C] focus:font-semibold focus:border-b-2 border-b-[#E5E8EB] pt-4 pb-[13px] cursor-pointer">
          All
        </button>
        <button className="font-inter text-sm text-[#4A739C] focus:text-[#0D141C] focus:font-semibold focus:border-b-2 border-b-[#E5E8EB] pt-4 pb-[13px] cursor-pointer">
          Completed
        </button>
        <button className="font-inter text-sm text-[#4A739C] focus:text-[#0D141C] focus:font-semibold focus:border-b-2 border-b-[#E5E8EB] pt-4 pb-[13px] cursor-pointer">
          Incomplete
        </button>
      </div>

      {tasks}
    </main>
  );
}
