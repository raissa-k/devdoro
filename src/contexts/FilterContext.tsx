import { createContext, ReactNode, useState } from "react";

interface FilterContextData {
	filter: boolean,
	filterStatus: boolean
	seeAll: () => void,
	seeDone: () => void,
	seeNotDone: () => void
}

interface FilterProviderProps {
	children: ReactNode
}

export const FilterContext = createContext({} as FilterContextData)

export default function ModalProvider({ children }: FilterProviderProps){
	const [filter, setFilter] = useState(false)
	const [filterStatus, setFilterStatus] = useState(true)

	const seeAll = () => {
		setFilter(false)
		console.log("see all")
	}
	const seeDone = () => {
		setFilter(true)
		setFilterStatus(true)
		console.log("see some")
	}
	const seeNotDone = () => {
		setFilter(true)
		setFilterStatus(false)
		console.log('dont see')
	}

	return (
		<FilterContext.Provider value={{
			filter, filterStatus, seeAll, seeDone, seeNotDone
		}}>
			{children}
		</FilterContext.Provider>
	)
}