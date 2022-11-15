import {useContext, useState} from 'react';
import {useLiveQuery} from "dexie-react-hooks";
import { taskTable } from '../../db/database.config';
import { ModalContext } from '../../contexts/ModalContext';
import { FilterContext } from '../../contexts/FilterContext';


export default function TaskList() {
	const { openModal } = useContext(ModalContext)
	const {filter, filterStatus} = useContext(FilterContext)

    const tasks = useLiveQuery(
        () => 
		filter ? taskTable.where({done: String(filterStatus)}).toArray() : taskTable.toArray(),
        [filter, filterStatus]
    );

	const completeTask = async (event) => {
        event.preventDefault()
        const taskId = Number(event.target.parentNode.id)
		const doneStatus = event.target.parentNode.dataset.done === 'false' ? 'true' : 'false'
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

  return (
	<>
	<section className="flex flex-col w-full gap-2">
		<button aria-label="Add task" onClick={openModal} className="btn btn-primary rounded-md gap-2 shadow shadow-primary/20" >
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Add task</span>
		</button>
	<ul role="list" className="flex flex-col gap-2" aria-label='Your tasks. Check to mark done.'>
      {tasks?.map((task) => (
        <li key={task.id} className="w-full min-h-12 flex justify-between items-center rounded-md px-2 bg-base-100 hover:bg-primary/10" id={String(task.id)} data-done={task.done}>
				<input type="checkbox" className='checkbox checkbox-primary rounded-full h-6 w-6 bg-base-100 border-accent/50 checked:border-transparent checked:bg-primary checked:shadow-md checked:shadow-primary/30 peer' name="" id={"task"+task.id} checked={task.done === 'true'} onClick={completeTask} readOnly />
				<label htmlFor={"task"+task.id} className="py-2 px-4 w-full rounded-md cursor-pointer">
					<p className={'text-sm break-all '+(task.done === 'false' ? 'opacity-80' : ' opacity-60 line-through italic')}>{task.task}</p>
				</label>
			<button type='button' 
			aria-label='Delete this task' 
			className="btn btn-error btn-square btn-xs shadow-md shadow-error/40"
			onClick={deleteTask}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 pointer-events-none">
					<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
				</svg>
			</button>
        </li>
      ))}
    </ul>
	</section>
	</>
  )
}
