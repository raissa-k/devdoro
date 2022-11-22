import {useContext} from 'react';
import { taskTable } from '../../db/database.config';
import { ITask } from '../../db/types';
import { ModalContext } from '../../contexts/ModalContext';
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { TaskContext } from '../../contexts/TaskContext';
import SingleTask from './SingleTask';


export default function TaskList() {
	const { openModal } = useContext(ModalContext)
	const {tasks, bulkDelete, updateDbOrder } = useContext(TaskContext)
	
	function handleOnDragEnd(result) {
		if (!result.destination) return;
		const items = Array.from(tasks);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		updateDbOrder(items)
	}

  return (
	<section className="flex flex-col w-full gap-4">
		<button aria-label="Add task" onClick={openModal} className="btn btn-primary rounded-md gap-2 shadow shadow-primary/20" >
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
			</svg>
			<span>Add task</span>
		</button>
		<DragDropContext onDragEnd={handleOnDragEnd}>
		<Droppable droppableId={taskTable.name}>
			{(provided) => (
			<ul {...provided.droppableProps} ref={provided.innerRef} role="list" className="flex flex-col gap-2" aria-label='Your tasks. Check to mark done.'>
				{tasks?.map((task: ITask) => ( 
					( 
					<SingleTask key={task.id} {...task}/>
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
  )
}
