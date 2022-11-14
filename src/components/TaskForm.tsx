import { taskTable } from '../db/database.config';
import { ITask } from '../db/types'; 

export function TaskForm() {
    const createTask = async (event) => {
        event.preventDefault()
        const task: ITask = {
            task: event.target.addTask.value,
            done: false
        }
        try {
            await taskTable.add(task);
            event.target.reset()

        } catch (error) {
            console.error(`Failed to add ${task}: ${error}`);
        }
    }
    return (
		<>
        <h2 className='text-3xl font-bold'>Task List</h2>
        <form onSubmit={createTask} className="form-control">
				<label className="label" id="modalTaskLabel">
					<span className="label-text">Your task</span>
				</label> 
			<div className="input-group">
				<input name="addTask" id="addTask" aria-labelledby="modalTaskLabel" placeholder="To do..." className="input input-accent w-full"/>
				<button className="btn btn-square btn-accent" aria-label="Add task">
					Add
				</button>
			</div>
		</form>
    </>)
};