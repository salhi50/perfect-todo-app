import React from "react";
import tasksReducer, { ADD_TASK, DELETE_TASK, TOGGLE_COMPLETE_TASK, UPDATE_TASK_TITLE } from "./reducers/TasksReducer";
import { type FilterBy } from "./types";

const App: React.FC = () => {
  const [tasks, dispatch] = React.useReducer(tasksReducer, []);
  const [filterBy, setFilterBy] = React.useState<FilterBy>("all");

  const completedTasks = tasks.filter(task => task.completed);
  const unCompletedTasks = tasks.filter(task => !task.completed);

  return (
    <main className="my-5 max-w-md mx-auto px-4">
      <h1 className="text-xl">Tasks</h1>
      <ul role="menu" className="flex gap-2 overflow-auto py-2 pl-1" aria-label="Filter tasks">
      {(["all", "completed", "uncompleted"] as FilterBy[]).map((filter, indx) => (
        <li role="menuitemradio" aria-checked={filterBy === filter} tabIndex={0} className={"py-1 px-4 text-sm rounded-full cursor-pointer select-none".concat(filterBy === filter ? " bg-primary-accent-light" : " bg-surface-1 hover:bg-surface-2")} key={indx} onClick={() => setFilterBy(filter)} onKeyDown={e => (e.key === " " || e.key === "Enter") && setFilterBy(filter)}>
          {filter.charAt(0).toUpperCase().concat(filter.slice(1))}
          <strong className="ml-2">{(filter === "all" ? tasks : filter === "completed" ? completedTasks : unCompletedTasks).length}</strong>
        </li>
      ))}
      </ul>
      <ul>
        {(filterBy === "all" ? tasks : filterBy === "completed" ? completedTasks : unCompletedTasks).map((task) => (
          <li key={task.id} className="flex gap-2 items-center mt-2">
            <input type="checkbox" className="border-main w-4 h-4 rounded-sm" checked={task.completed} onChange={() => dispatch({type: TOGGLE_COMPLETE_TASK, taskId: task.id})} aria-label={task.completed ? "mark task as uncompleted" : "mark task as completed"} />
            <input placeholder="To-do" className={"flex-1 bg-surface border-0 p-0 focus:outline-0".concat(task.completed ? " line-through" : "")} value={task.title} onChange={e => dispatch({type: UPDATE_TASK_TITLE, taskId: task.id, newTitle: e.target.value})} />
            <button className="flex items-center justify-center bg-surface-1 hover:bg-surface-2 w-8 h-8 rounded-full border-0 cursor-pointer select-none" onClick={() => dispatch({type: DELETE_TASK, taskId: task.id})} aria-label="Delete task">
              <svg className="opacity-75" aria-hidden viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><g><path d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
            </button>
          </li>
        ))}
      </ul>
      <button className="flex select-none gap-2 mt-2 border-0 bg-surface text-primary-accent px-2 py-1 cursor-pointer" onClick={() => dispatch({type: ADD_TASK, newTask: {id: new Date().getTime().toString(), title: "", completed: filterBy === "completed"}})}>
        <span aria-hidden>+</span>
        <span>Add task</span>
      </button>
    </main>
  )
}

export default App;