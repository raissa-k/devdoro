import dynamic from "next/dynamic";
import FilterProvider, { FilterContext } from "../../contexts/FilterContext";
import ModalProvider from "../../contexts/ModalContext";
import FilterMenu from "../Menus/Filter";
import ModalForm from "../Menus/Modal";
import { CreateTask } from "./Create";


const TaskList = dynamic(() =>import("./TaskList"), {ssr: false})

export function Tasks(){
	return (
		<ModalProvider>
		<FilterProvider>
		<section aria-label="Tasks" role={"tabpanel"} id="taskTab" className='mt-12 mx-auto w-full max-w-xs mb-16 bg-primary/10 rounded-md shadow-md shadow-primary/20 p-2'>
			<div className="flex justify-between items-start">
			<h1 className="text-lg font-bold px-1">Tasks</h1>
			</div>
			<div className="flex flex-wrap">
			<FilterMenu />
			</div>
			<ModalForm modalTitle="Create task">
				<CreateTask/>
			</ModalForm>
			<TaskList />
		</section>
		</FilterProvider>
		</ModalProvider>
	)
}