import { createContext, ReactNode, useState } from "react";

interface ModalContextData {
	isShowing: boolean,
	closeModal: () => void,
	openModal: () => void,
}

interface ModalProviderProps {
	children: ReactNode
}

export const ModalContext = createContext({} as ModalContextData)

export default function ModalProvider({ children }: ModalProviderProps){
	const [isShowing, setIsShowing] = useState(false)
	function closeModal(){
		setIsShowing(false)
	}

	function openModal(){
		setIsShowing(true)
	}


	return (
		<ModalContext.Provider value={{
			isShowing, closeModal, openModal
		}}>
			{children}
		</ModalContext.Provider>
	)
}