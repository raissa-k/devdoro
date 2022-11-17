import React, { useContext } from "react"
import { FilterContext } from "../../contexts/FilterContext"

export default function FilterMenu() {
  const {filter, filterStatus, seeAll, seeDone, seeNotDone} = useContext(FilterContext)

  const filterItems = [
    {
		filterName: "See all",
		filterFunction: seeAll
    },
    {
		filterName: 'See "done"',
		filterFunction: seeDone
    },
    {
		filterName: 'See "not done"',
		filterFunction: seeNotDone
    }
  ]

  return (
      <details className="py-4 w-full">
		<summary className="btn btn-sm btn-square btn-primary absolute top-14 right-[33rem]" aria-label="Filter tasks">
			<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
			</svg>
		</summary>
		<ul aria-label="Filter tasks"
          className="flex justify-around mt-1 bg-base-100 rounded-md p-2 shadow-md shadow-primary/20">
          {filterItems.map((item, index) => {
            return (
              <li key={index}>
                <button aria-label={item.filterName}
                  className="btn btn-xs btn-ghost opacity-80 hover:bg-primary/20 transition "
				  onClick={item.filterFunction}
                >
                  <span className="flex flex-col gap-1 whitespace-nowrap">
                    <span className="leading-5">{item.filterName}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
		</details>
  )
}
