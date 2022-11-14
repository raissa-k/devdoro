import {useState} from 'react';
import {useLiveQuery} from "dexie-react-hooks";
import { taskTable } from '../db/database.config';

export default function TaskList() {
	const [filter, setFilter] = useState(false)
	const [filterStatus, setFilterStatus] = useState(true)

    const tasks = useLiveQuery(
        () => 
		filter ? taskTable.where({done: String(filterStatus)}).toArray() : taskTable.toArray(),
        [filter, filterStatus]
    );

	const completeTask = async (event) => {
        event.preventDefault()
        const taskId = Number(event.target.parentNode.id)
		const doneStatus = event.target.parentNode.dataset.done === 'false' ? 'true' : 'false'
		console.log(taskId, doneStatus)
        try {
            await taskTable.update(taskId, {done: doneStatus});

        } catch (error) {
            console.error(`Failed to edit ${taskId}: ${error}`);
        }
    }

	const deleteTask = async (event) => {
        event.preventDefault()
        const taskId = Number(event.target.parentNode.id)
		try {
            await taskTable.delete(taskId);
        } catch (error) {
            console.error(`Failed to delete ${taskId}: ${error}`);
        }
    }

	const bulkDelete = async() => {
		try {
			await taskTable.where({done: "true"}).delete();
        } catch (error) {
            console.error(`Failed to delete tasks, ${error}`);
        }
	}

	const seeAll = () => {
		setFilter(false)
	}
	const seeDone = () => {
		setFilter(true)
		setFilterStatus(true)
	}
	const seeNotDone = () => {
		setFilter(true)
		setFilterStatus(false)
	}

  return (
	<>
	<div className="flex flex-wrap w-full gap-4 py-6 justify-center">
		<button aria-label='See all' 
		className={"btn btn-xs md:btn-md btn-accent"+(!filter ? " btn-active" : "")} 
		onClick={seeAll}>
			See all
		</button>
		
		<button 
		aria-label='See tasks done' 
		className={"btn btn-xs md:btn-md btn-accent"+(filter && filterStatus ? " btn-active" : "")} 
		onClick={seeDone}>
			Tasks Done
		</button>
		
		<button 
		aria-label='See tasks not done' 
		className={"btn btn-xs md:btn-md btn-accent"+(filter && !filterStatus ? " btn-active" : "")} 
		onClick={seeNotDone}>
			Tasks not done
		</button>
	</div>
	<section className="flex flex-col w-full">
    <ul role="list" className="flex flex-col divide-y divide-accent/50 border border-accent/30 rounded-box">
      {tasks?.map((task) => (
        <li key={task.id} className="w-full p-6 flex flex-col">
       		<p className={'text-sm '+(task.done === 'false' ? 'opacity-80' : ' opacity-60 line-through italic')}>{task.task}</p>
            <div className="mt-6 flex flex-wrap justify-between md:justify-end gap-6" id={String(task.id)} data-done={task.done}>
                	<button className="btn btn-xs sm:btn-sm btn-error rounded-full" onClick={deleteTask}>Delete</button>
                	<button className="btn btn-xs sm:btn-sm btn-secondary rounded-full" onClick={completeTask}>{task.done === 'false' ? 'Mark done' : 'Mark not done'}</button>
			</div>
        </li>
      ))}
    </ul>
	<button aria-label='Delete all done' 
		className={"mt-12 btn btn-md btn-error ml-auto"} 
		onClick={bulkDelete}>
			Delete all completed tasks
		</button>
	</section>
	</>
  )
}
