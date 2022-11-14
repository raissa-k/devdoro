import { CountdownProvider } from "../contexts/CountdownContext";
import { Exercise } from "./Exercise";
import { Countdown } from "./Countdown";

export function Timer(){
	return (
		<CountdownProvider>
		<section className="mb-16 md:mb-0 md:mt-16 flex flex-col flex-1 md:grid grid-cols-2 gap-8 content-start">
			<Countdown />
			<Exercise />
		</section>
		</CountdownProvider>
	)
}