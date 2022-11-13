import { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"

export default function ModalForm() {
	const [isShowing, setIsShowing] = useState(false)

	const wrapperRef = useRef(null)

	useEffect(() => {
		function handleClickOutside(event: { target: any }) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				setIsShowing(false)
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [wrapperRef])

	useEffect(() => {
		let html = document.querySelector("html") as HTMLElement

		if (html) {
			if (isShowing && html) {
				html.style.overflowY = "hidden"

				const focusableElements =
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'

				const modal = document.querySelector("#modal") as HTMLElement

				const firstFocusableElement =
					modal.querySelectorAll(focusableElements)[0] as HTMLElement

				const focusableContent = modal.querySelectorAll(focusableElements)

				const lastFocusableElement =
					focusableContent[focusableContent.length - 1] as HTMLElement

				document.addEventListener("keydown", function (e) {
					if (e.DOM_KEY_LOCATION_STANDARD === 27) {
						setIsShowing(false)
					}

					let isTabPressed = e.key === "Tab" || e.DOM_KEY_LOCATION_STANDARD === 9

					if (!isTabPressed) {
						return
					}

					if (e.shiftKey) {
						// if shift key pressed for shift + tab combination
						if (document.activeElement === firstFocusableElement) {
							lastFocusableElement.focus() // add focus for the last focusable element
							e.preventDefault()
						}
					} else {
						// if tab key is pressed
						if (document.activeElement === lastFocusableElement) {
							// if focused has reached to last focusable element then focus first focusable element after pressing tab
							firstFocusableElement.focus() // add focus for the first focusable element
							e.preventDefault()
						}
					}
				})

				firstFocusableElement.focus()
			} else {
				html.style.overflowY = "visible"
			}
		}
	}, [isShowing])

	return (
		<>
			<button aria-label="Add task" onClick={() => setIsShowing(true)} className="btn btn-primary my-8 rounded-full" >
				Add task
			</button>

			{isShowing && typeof document !== "undefined"
				? ReactDOM.createPortal(
					<div className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm" aria-labelledby="header-modal content-modal" aria-modal="true" tabIndex={-1} role="dialog" >
						<div ref={wrapperRef}
						className="flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-base-100 p-6 shadow-xl shadow-accent/10 border border-accent/40" id="modal">
							<header id="header-modal" className="flex items-center">
								<h3 className="flex-1 text-lg font-medium">
									Add a task
								</h3>
								<button onClick={() => setIsShowing(false)} className="btn btn-circle btn-ghost btn-active" aria-label="close dialog">
									<span className="relative only:-mx-5">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</span>
								</button>
							</header>
							
							<div id="content-modal">
								<form className="form-control gap-6">
									<div className="flex flex-col">
									<label className="label" id="modalTaskLabel">
										<span className="label-text">Your task</span>
									</label> 
										<input name="addTask" aria-labelledby="modalTaskLabel" placeholder="To do..." className="input input-accent w-full"/>
									</div>

									<div className="flex gap-6 justify-between items-center">
									<button className="btn btn-primary rounded-full" aria-label="Create task">
										Create
									</button>
									</div>
								</form>
							</div>
						</div>
					</div>,
					document.body
				) : null}
		</>
	)
}