import { TaskForm } from "./TaskForm";
import dynamic from 'next/dynamic';

const TaskList = dynamic(() =>import("../components/TaskList"), {ssr: false})

export function Tasks(){
	return (
		<div className='mb-16 md:mb-0 md:mt-16 bg-accent/20 rounded-box shadow-lg shadow-accent/10 py-12 px-8 flex flex-col items-center justify-center border border-accent/30'>
			<TaskForm />
			<TaskList />
		</div>
	)
}