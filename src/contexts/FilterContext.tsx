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

export default function FilterProvider({ children }: FilterProviderProps){
	const [filter, setFilter] = useState(false)
	const [filterStatus, setFilterStatus] = useState(true)

	const seeAll = () => {
		setFilter(false)
	}
	const seeDone = () => {
		setFilter(true)
		setFilterStatus(true)
	}
	const seeNotDone = () => {
		setFilter(true)
		setFilterStatus(false)
	}

	return (
		<FilterContext.Provider value={{
			filter, filterStatus, seeAll, seeDone, seeNotDone
		}}>
			{children}
		</FilterContext.Provider>
	)
}