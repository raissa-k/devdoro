import { useRef, useEffect, ReactNode, useContext } from "react"
import ReactDOM from "react-dom"
import { ModalContext } from "../../contexts/ModalContext"

interface ModalProps {
	children: ReactNode,
	modalTitle: string
}

export default function ModalForm({children, modalTitle}: ModalProps) {
	const { isShowing, closeModal } = useContext(ModalContext)

	const wrapperRef = useRef(null)

	useEffect(() => {
		function handleClickOutside(event: { target: any }) {
			if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
				closeModal()
			}
		}
		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [wrapperRef, closeModal])

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
						closeModal()
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
	}, [isShowing, closeModal])

	return (
		<>
			{isShowing && typeof document !== "undefined"
				? ReactDOM.createPortal(
					<div className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-neutral/20 backdrop-blur-sm" aria-labelledby="header-modal content-modal" aria-modal="true" tabIndex={-1} role="dialog" >
						<div ref={wrapperRef}
						className="absolute top-5 flex max-h-[90vh] max-w-sm flex-col gap-4 overflow-hidden rounded bg-base-100 p-6 shadow-xl shadow-primary/20 border border-primary/30" id="modal">
							<header id="header-modal" className="flex items-center">
								<h3 className="flex-1 text-lg font-medium">
									{modalTitle}
								</h3>
								<button onClick={closeModal} className="btn btn-sm btn-ghost" aria-label="close dialog">
									<span className="relative only:-mx-5">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
											<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
										</svg>
									</span>
								</button>
							</header>
							
							<div id="content-modal">
								{children}
							</div>
						</div>
					</div>,
					document.body
				) : null}
		</>
	)
}