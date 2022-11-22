
import { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { taskTable } from '../../db/database.config';
import { ITask } from '../../db/types'; 

export function CreateTask() {
	const { closeModal } = useContext(ModalContext)

    const createTask = async (event) => {
		let taskLength = await taskTable.count()
        event.preventDefault()
        const task: ITask = {
            task: event.target.addTask.value,
            done: 0,
			order: taskLength
        }
        try {
            await taskTable.add(task);
            event.target.reset()
			closeModal()
			location.replace('/?tab=tasks')
        } catch (error) {
            console.error(`Failed to add ${task}: ${error}`);
        }
    }
    return (
		<div id="content-modal">
			<form className="form-control gap-6 py-6" onSubmit={createTask}>
				<div className="form-control">
				<label htmlFor="form-task" className="label">
					<span className="label-text">What are you going to do?</span>
				</label>
				<input id="form-task" type="text" required name="addTask" placeholder="To do..." className="input input-primary w-full"/>
				</div>

				<button type='submit' aria-label="Save this task" className="btn btn-primary rounded-md gap-2 shadow shadow-primary/20" >
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
					<span>Add task</span>
				</button>
			</form>
		</div>
		)
};
