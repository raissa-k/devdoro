
import { useContext, useState } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { taskTable } from '../../db/database.config';
import { ITask } from '../../db/types'; 

export function CreateTask() {
	const { closeModal } = useContext(ModalContext)

    const createTask = async (event) => {
        event.preventDefault()
        const task: ITask = {
            task: event.target.addTask.value,
            done: 'false'
        }
        try {
            await taskTable.add(task);
            event.target.reset()
			closeModal()

        } catch (error) {
            console.error(`Failed to add ${task}: ${error}`);
        }
    }
    return (
		<div id="content-modal">
			<form className="form-control gap-6 py-6" onSubmit={createTask}>
				<input name="addTask" aria-labelledby="headerTitle" placeholder="To do..." className="input input-primary w-full"/>

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
