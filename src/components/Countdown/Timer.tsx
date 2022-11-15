import { CountdownProvider } from "../../contexts/CountdownContext";
import { Countdown } from "./Countdown";
import { Exercise } from "../Exercise";

export function Timer(){
	return (
		<CountdownProvider>
		<section aria-label="Timer" role={"tabpanel"} className="mb-16 md:mb-0 md:mt-16 flex flex-col flex-1 md:grid grid-cols-2 gap-8 content-start">
			<Countdown />
			<Exercise />
		</section>
		</CountdownProvider>
	)
}