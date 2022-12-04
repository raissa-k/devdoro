import { useLiveQuery } from "dexie-react-hooks";
import { createContext, FormEvent, SyntheticEvent, useContext, useState } from "react";
import database, { taskTable } from "../db/database.config";
import { ITask, TaskContextDataTypes, TaskProviderPropsTypes } from "../types/types";
import { ModalContext } from "./ModalContext";

export const TaskContext = createContext({} as TaskContextDataTypes)

export default function TaskProvider({ children }: TaskProviderPropsTypes){
	const { closeModal } = useContext(ModalContext)
	const [isFilterActive, setIsFilterActive] = useState(false)
	const [filteredStatus, setFilteredStatus] = useState<0|1>(0)

	const seeAll = () => {
		setIsFilterActive(false)
	}
	const seeDone = () => {
		setIsFilterActive(true)
		setFilteredStatus(1)
	}
	const seeNotDone = () => {
		setIsFilterActive(true)
		setFilteredStatus(0)
	}

	const tasks: ITask[] = useLiveQuery(
		() => 
		isFilterActive ? taskTable.where({done: filteredStatus}).sortBy('order') : taskTable.orderBy('order').toArray(),
        [isFilterActive, filteredStatus]
		);
	

	const createTask = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		let taskLength = await taskTable.count()
		const task: ITask = {
			task: event.target['addTask'].value,
			done: 0,
			order: taskLength
		}
		try {
			await taskTable.add(task)
		} catch (error) {
			console.error(error)
		}
		closeModal()
	}

	const toggleCompleteTask = async (event: SyntheticEvent<HTMLInputElement>) => {
        const taskId: number = Number(event.currentTarget.parentElement.parentElement.id)
		const doneStatus: number = event.currentTarget.parentElement.parentElement.dataset.done === "0" ? 1 : 0
        try {
            await taskTable.update(taskId, {done: doneStatus});

        } catch (error) {
            console.error(`Failed to edit ${taskId}: ${error}`);
        }
    }

	const deleteTask = async (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const taskId = Number(event.currentTarget.parentElement.parentElement.id)

		await taskTable.delete(taskId).then(() => updateDbOrder()).catch(err => console.error(err))
    }

	const bulkDelete = async() => {
		await taskTable.where({done: 1}).delete().then(() => updateDbOrder()).catch(err => console.error(err))
	}

	const updateDbOrder = async(items?: ITask[]) => {
		!items ? items = await taskTable.toArray() : items
		database.transaction('rw', taskTable, async() => {
			var updatedTable = []
			for (let i = 0; i < items.length; i++){
				updatedTable.push({id: items[i].id, task: items[i].task, done: items[i].done, order: i})
			}
			await taskTable.bulkPut(updatedTable)
		}).catch(err => console.error(err))
	}


	return (
		<TaskContext.Provider value={{
			tasks, seeAll, seeDone, seeNotDone, isFilterActive, filteredStatus, toggleCompleteTask, deleteTask, bulkDelete, createTask, updateDbOrder 
		}}>
			{children}
		</TaskContext.Provider>
	)
}