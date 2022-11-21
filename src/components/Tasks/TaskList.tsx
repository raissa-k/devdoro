import {useContext } from 'react';
import {useLiveQuery} from "dexie-react-hooks";
import database, { taskTable } from '../../db/database.config';
import { ModalContext } from '../../contexts/ModalContext';
import { FilterContext } from '../../contexts/FilterContext';
import { ITask } from '../../db/types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'


export default function TaskList() {
	const { openModal } = useContext(ModalContext)
	const {isFilterActive, filteredStatus} = useContext(FilterContext)

    const tasks: ITask[] = useLiveQuery(
        () => 
		isFilterActive ? taskTable.where({done: filteredStatus}).sortBy('order') : taskTable.orderBy('order').toArray(),
        [isFilterActive, filteredStatus]
    );

	const toggleCompleteTask = async (event) => {
        event.preventDefault()
        const taskId = Number(event.target.parentNode.parentNode.id)
		const doneStatus = event.target.parentNode.parentNode.dataset.done === "0" ? 1 : 0
        try {
            await taskTable.update(taskId, {done: doneStatus});

        } catch (error) {
            console.error(`Failed to edit ${taskId}: ${error}`);
        }
    }

	const deleteTask = async (event) => {
        event.preventDefault()
        const taskId = Number(event.target.parentNode.parentNode.id)
		try {
            await taskTable.delete(taskId);
        } catch (error) {
            console.error(`Failed to delete ${taskId}: ${error}`);
        }
    }

	const bulkDelete = async() => {
		try {
			await taskTable.where({done: 1}).delete();
        } catch (error) {
            console.error(`Failed to delete tasks, ${error}`);
        }
	}

	const updateDbOrder = async() => {
		database.transaction('rw', taskTable, async() => {

		})
	}

  return (
	<>
	<section className="flex flex-col w-full gap-4">
		<button aria-label="Add task" onClick={openModal} className="btn btn-primary rounded-md gap-2 shadow shadow-primary/20" >
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Add task</span>
		</button>
		<DragDropContext>
		<Droppable droppableId={taskTable.name}>
			{(provided) => (
			<ul {...provided.droppableProps} ref={provided.innerRef} role="list" className="flex flex-col gap-2" aria-label='Your tasks. Check to mark done.'>
				{tasks?.map(({id, task, done, order}, index) => ( 
					( 
					<Draggable key={id} draggableId={String(id)} index={order}>
						{(provided) => (
							<li ref={provided.innerRef} {...provided.draggableProps} className="flex flex-col gap-4 rounded-md p-2 bg-base-100 hover:bg-primary/10" id={String(id)} data-done={done}>
								<div className="flex justify-between items-center">
									<button {...provided.dragHandleProps} className="btn btn-square btn-sm btn-ghost text-primary/60 mr-2 hover:bg-primary-content/80" aria-label="">
										<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
											<path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
										</svg>
									</button>
									<button type='button' aria-label='Delete this task' title='Delete this task' className="btn btn-error btn-square btn-xs shadow-md shadow-error/50 hover:text-red-300 hover:bg-red-800" onClick={deleteTask}>
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 pointer-events-none">
											<path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
										</svg>
									</button>
								</div>
								<div className="flex justify-between items-center pl-2">
								<input type="checkbox" className='checkbox checkbox-primary rounded-full h-6 w-6 bg-base-100 border-primary/60 checked:border-transparent checked:bg-primary checked:shadow-md checked:shadow-primary/30 peer' name="" id={"task"+id} checked={done === 1} onClick={toggleCompleteTask} readOnly />
								<label htmlFor={"task"+id} className="py-2 px-4 w-full rounded-md cursor-pointer">
									<p className={'text-sm break-all '+(done === 0 ? 'opacity-80' : ' opacity-70 line-through italic')}>{task}</p>
								</label>
								</div>
							</li>
						)}
					</Draggable>
					)
				))}
			{provided.placeholder}
			</ul>
			)}
		</Droppable>
		</DragDropContext>
		<button aria-label="Delete all completed" onClick={bulkDelete} className="btn btn-sm mt-4 ml-auto btn-error rounded-md shadow shadow-error/30 text-xs  hover:bg-error-content hover:text-error">
			<span>Delete completed</span>
		</button>
	</section>
	</>
  )
}
