import { createContext, ReactNode, useState } from "react";

interface FilterContextData {
	isFilterActive: boolean,
	filteredStatus: 0|1,
	seeAll: () => void,
	seeDone: () => void,
	seeNotDone: () => void
}

interface FilterProviderProps {
	children: ReactNode
}

export const FilterContext = createContext({} as FilterContextData)

export default function FilterProvider({ children }: FilterProviderProps){
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

	return (
		<FilterContext.Provider value={{
			isFilterActive, filteredStatus, seeAll, seeDone, seeNotDone
		}}>
			{children}
		</FilterContext.Provider>
	)
}