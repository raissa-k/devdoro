import { CountdownProvider } from "../../contexts/CountdownContext";
import { Countdown } from "./Countdown";
import { Exercise } from "../Exercise";
import ModalForm from "../Menus/Modal";
import ModalProvider from "../../contexts/ModalContext";

export function Timer(){
	return (
		<CountdownProvider>
		<ModalProvider>
		<section aria-label="Timer" role={"tabpanel"} className="flex flex-col items-center min-h-screen">
			<Countdown />
			<ModalForm modalTitle="Move around!">
				<Exercise />
			</ModalForm>
		</section>
		</ModalProvider>
		</CountdownProvider>
	)
}