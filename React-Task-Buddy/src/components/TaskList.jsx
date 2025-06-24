
export default function TaskList({task, completed}) {
    return (
            <div className="flex justify-between px-4 py-4 font-inter">
            <ul>
                <li >
                    {
                        completed ? (
                            <del>
                                {task}
                            </del>
                        ) : (task)
                    }
                    
                </li>
            </ul>
           
  <input type="checkbox" id="checkbox1" className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />

        </div>
        )
}
