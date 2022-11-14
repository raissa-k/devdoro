import {useState} from 'react';
import {useLiveQuery} from "dexie-react-hooks";
import { taskTable } from '../db/database.config';
import { ITask } from '../db/types';

export default function TaskList() {
    const tasks = useLiveQuery(
        () => taskTable.toArray(),
        []
    );

	const completeTask = async (event) => {
        event.preventDefault()
        const taskId = Number(event.target.parentNode.id)
		const doneStatus = event.target.parentNode.dataset.done == 'false' ? true : false
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

  return (
	<section className="flex flex-col mt-6">
    <ul role="list" className="flex flex-col divide-y divide-accent/50 border border-accent/30 rounded-box">
      {tasks?.map((task) => (
        <li key={task.id} className="w-full p-6 flex flex-col">
       		<p className={'text-sm'+(task.done === false ? 'opacity-80' : ' opacity-60 line-through italic')}>{task.task}</p>
            <div className="mt-6 flex flex-wrap justify-between gap-6" id={String(task.id)} data-done={String(task.done)}>
                	<button className="btn btn-xs sm:btn-sm btn-error rounded-full" onClick={deleteTask}>Delete</button>
                	<button className="btn btn-xs sm:btn-sm btn-secondary rounded-full" onClick={completeTask}>Done</button>
			</div>
        </li>
      ))}
    </ul>
	</section>
  )
}
