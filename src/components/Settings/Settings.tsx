import ModalForm from "../Menus/Modal";
import ModalProvider from "../../contexts/ModalContext";
import TimerProvider from "../../contexts/TimerContext";
import TimeInputs from "./SettingsTimeMenu";

export function Settings(){
	return (
		<>
		<TimerProvider>
		<ModalProvider>
		<section aria-label="Settings" role={"tabpanel"} id="taskTab" className='mx-auto w-full max-w-xs mt-8 flex flex-col items-center justify-center gap-4 mb-24 bg-primary/10 rounded-md shadow-md shadow-primary/20 p-6 relative z-20'>
			<div className="w-full flex flex-wrap justify-between items-start gap-2 p-1">
			<h1 className="text-lg font-bold">Settings</h1>
			<p className=" opacity-90">Adjust the length of your timers.</p>
			</div>
			<TimeInputs />
		</section>
		</ModalProvider>
		</TimerProvider>
		</>
	)
}