import { Exercise } from "../Exercise";
import ModalForm from "../Menus/Modal";
import ModalProvider from "../../contexts/ModalContext";
import TimerProvider from "../../contexts/TimerContext";
import Clock from "./Clock";

export function Timer(){
	return (
		<>
			<TimerProvider>
				<ModalProvider>
					<section aria-label="Timer" role={"tabpanel"} className="flex flex-col items-center min-h-screen">
						<Clock />
						<ModalForm modalTitle="Move around!">
							<Exercise />
						</ModalForm>
					</section>
				</ModalProvider>
			</TimerProvider>
		</>
	);
}