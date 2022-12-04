import { createContext, ReactNode, useState } from "react";
import { ModalContextDataTypes, ModalProviderPropsTypes } from "../types/types";

export const ModalContext = createContext({} as ModalContextDataTypes)

export default function ModalProvider({ children }: ModalProviderPropsTypes){
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