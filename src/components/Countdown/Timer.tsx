import { CountdownProvider } from "../../contexts/CountdownContext";
import { Countdown } from "./Countdown";
import { Exercise } from "../Exercise";
import ModalForm from "../Menus/Modal";
import ModalProvider from "../../contexts/ModalContext";

export function Timer(){
	return (
		<CountdownProvider>
		<ModalProvider>
		<section aria-label="Timer" role={"tabpanel"} className="mb-16 md:mb-0 flex flex-col flex-1 md:grid grid-cols-2 gap-8 content-start">
			<Countdown />
			<ModalForm modalTitle="Move around!">
				<Exercise />
			</ModalForm>
		</section>
		</ModalProvider>
		</CountdownProvider>
	)
}