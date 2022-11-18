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
		<section aria-label="Tasks" role={"tabpanel"} id="taskTab" className='mx-auto w-full max-w-xs mt-8 flex flex-col items-center justify-center gap-4 mb-16 bg-primary/10 rounded-md shadow-md shadow-primary/20 p-2 relative z-20'>
			<div className="w-full flex flex-wrap justify-between items-start p-1">
			<h1 className="text-lg font-bold">Tasks</h1>
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