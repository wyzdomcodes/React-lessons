import { useState } from "react";
import TaskList from "./TaskList";
import { tasklist } from "./Tasks";
function TaskSection({tasks}) {
   return tasks.map(task => {
        return <TaskList 
        task={task.task}
        key={task.id}
        completed={task.completed}
        />
    })
}
export default function Main() {
    const completedTasks = []
    const incompleteTasks = []

    tasklist.forEach(task => {
        if(task.completed === true ) {
            completedTasks.push({ task: task.task, completed: task.completed, id: task.id })
        }
        else {
            incompleteTasks.push({ task: task.task, completed: task.completed, id: task.id })
        }
    })

    const [tasks, setTasks] = useState(tasklist)
    const [task, setTask] = useState('')

    const displayAllTasks = () => {
        setTasks(tasklist)
    }
    const displayCompletedTasks = () => {
        setTasks(completedTasks)
    }
    const displayIncompleteTasks = () => {
        setTasks(incompleteTasks)
    }
    let nextId = 5
    const handleAddTaskClick = () => {
        setTasks([...tasks, {
            task: task, id: nextId + 1, completed:false
        }])
    }

  return (
    <main className="px-40 py-5">
      <h1 className="font-inter font-bold text-3xl px-4 pt-5 pb-3 text-center text-[#0D141C]">
        My Tasks
      </h1>
      <form>
        <div className="px-4 py-3 w-[480px] h-20">
          <input
          value={task}
          onChange={e => setTask(e.target.value)}
            type="text"
            name="addTask"
            placeholder="Add a new task"
            className="w-[448px] h-[56px] bg-[#F7FAFC] p-[15px] placeholder:text-[#4A739C] outline-none border border-[#CFDBE8] rounded-xl"
          />
        </div>
        <div className="px-4 py-3 flex items-center justify-center">
          <button
          onClick={handleAddTaskClick}
            type="button"
            className="px-4 bg-[#0D80F2] rounded-xl text-[#F7FAFC] text-sm font-inter h-10 w-24"
          >
            Add Task
          </button>
        </div>
      </form>

      <div className="flex justify-start gap-10 pb-3 px-4">
        <button onClick={displayAllTasks} className="font-inter text-sm text-[#4A739C] focus:text-[#0D141C] focus:font-semibold focus:border-b-2 border-b-[#E5E8EB] pt-4 pb-[13px] cursor-pointer">
          All
        </button>
        <button onClick={displayCompletedTasks} className="font-inter text-sm text-[#4A739C] focus:text-[#0D141C] focus:font-semibold focus:border-b-2 border-b-[#E5E8EB] pt-4 pb-[13px] cursor-pointer">
          Completed
        </button>
        <button onClick={displayIncompleteTasks} className="font-inter text-sm text-[#4A739C] focus:text-[#0D141C] focus:font-semibold focus:border-b-2 border-b-[#E5E8EB] pt-4 pb-[13px] cursor-pointer">
          Incomplete
        </button>
      </div>
      <TaskSection tasks={tasks}/>
      <hr />
    </main>
  );
}
