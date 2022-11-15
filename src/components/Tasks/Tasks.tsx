import dynamic from "next/dynamic";
import ModalProvider from "../../contexts/ModalContext";
import FilterMenu from "../Menus/Filter";
import ModalForm from "../Menus/Modal";
import { CreateTask } from "./Create";


const TaskList = dynamic(() =>import("./TaskList"), {ssr: false})

export function Tasks(){
	return (
		<ModalProvider>
		<section aria-label="Tasks" role={"tabpanel"} id="taskTab" className='mx-auto w-full max-w-xs mb-16 bg-primary/10 rounded-md shadow-md shadow-primary/20 p-2'>
			<div className="flex justify-between items-start h-10">
			<h1 className="text-lg font-bold">Tasks</h1>
			<FilterMenu />
			</div>
			<ModalForm modalTitle="Create task">
				<CreateTask/>
			</ModalForm>
			<TaskList />
		</section>
		</ModalProvider>
	)
}