import React, { useState, useEffect, useRef, useContext } from "react"
import { FilterContext } from "../../contexts/FilterContext"

export default function FilterMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState(null)
  const {filter, filterStatus, seeAll, seeDone, seeNotDone} = useContext(FilterContext)

  const wrapperRef = useRef(null)

  const openMenu = () => {
	setIsOpen(!isOpen)
	}

  const filterItems = [
    {
		filterName: "See all tasks",
		filterFunction: seeAll
    },
    {
		filterName: 'Filter by "done"',
		filterFunction: seeDone
    },
    {
		filterName: 'Filter by "not done"',
		filterFunction: seeNotDone
    },
	{
		filterName: "Close menu",
		filterFunction: openMenu
	}
  ]

	

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [wrapperRef])

  const handleKeyDown = e => {
    if (isOpen) {
      e.preventDefault()

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === filterItems.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // Tab
        case 9:
          if (currentItem === filterItems.length - 1) {
            setCurrentItem(0)
          } else {
            setCurrentItem(currentItem + 1)
          }
          break
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(filterItems.length - 1)
          } else {
            setCurrentItem(currentItem - 1)
          }
          break
        // Escape
        case 27:
          setCurrentItem(1)
          setIsOpen(false)
          break
        default:
          break
      }
    }
  }

  return (
    <>
      <div className="relative inline-flex " id="dropdown">
        <button aria-label="Filter menu"
          className="btn btn-sm btn-square btn-primary"
          onClick={openMenu}
          aria-expanded={isOpen ? "true" : "false"}
          ref={wrapperRef}
        >
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
				<path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
			</svg>
        </button>
        <ul
		aria-label="Filter tasks"
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-40 mt-1 flex flex-col rounded-md bg-base-100 py-2 shadow-md shadow-primary/20 `}
        >
          {filterItems.map((item, index) => {
            return (
              <li key={index}>
                <button
					role="menuitem"
                  className={` ${
                    index === currentItem
                      ? "bg-primary"
                      : ""
                  } flex items-start justify-start w-full gap-2 p-4 px-5 transition-colors duration-300 hover:bg-primary/20`}
                >
                  <span className="flex flex-col gap-1 whitespace-nowrap">
                    <span className="leading-5">{item.filterName}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
