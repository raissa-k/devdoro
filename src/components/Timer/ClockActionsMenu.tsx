import { useContext } from "react";
import { timerActions } from "../../contexts/TimerReducer";
import { ModalContext } from "../../contexts/ModalContext";
import { useTimer, useTimerDispatch } from "../../contexts/TimerContext";

export default function ClockActionsMenu(){
	const { openModal } = useContext(ModalContext);
	const state = useTimer();
	const { dispatch } = useTimerDispatch();

	return (
		<div role={"menu"} aria-label="Timer actions" className='flex justify-between w-full items-center px-4'>
			<div className="bg-gradient-to-b from-secondary to-primary h-12 w-12 rounded-full shadow-lg shadow-accent/20">
				<button type='button' role={"menuitem"} onClick={openModal} aria-label="Get break exercise" title="Get break exercise" className={"group relative z-20 btn btn-circle items-center hover:btn-secondary outline-base-content "+(state.mode.match("pomodoro") && state.start && state.time === 0 ? " pulse btn-accent shadow-accent/30" : " hover:btn-secondary hover:ring hover:ring-secondary-content hover:ring-inset btn-ghost text-secondary-content")}>
					<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pointer-events-none">
						<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
					</svg>
				</button>
			</div>

			<div className="text-secondary-content bg-gradient-to-b from-secondary to-secondary-focus h-20 w-20 rounded-full border-secondary border-4 shadow-lg shadow-accent/20 flex items-center justify-center">
				{ state.mode.match("pomodoro") && state.start && state.time === 0 ? (
					<button
						aria-label='Cycle ended'
						aria-disabled="true"
						disabled
						className="btn btn-circle btn-lg flex justify-center items-center outline-base-content text-accent/30">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				) : (
					<>
						{ state.start && state.time > 0 ? (
							<button type='button' onClick={() => dispatch({type: timerActions.stop})} aria-label="Stop countdown" title="Stop countdown" className="btn btn-ghost hover:btn-secondary btn-circle btn-lg flex justify-center items-center group relative z-20 outline-base-content outline-offset-8 hover:ring hover:ring-secondary-content text-secondary-content">
								<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 pointer-events-none group-hover:fill-secondary-content">
									<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
								</svg>
							</button>
						) : (
							<button type='button' onClick={() => dispatch({ type: timerActions.start})} aria-label="Start countdown" title="Start countdown" className="btn btn-ghost hover:btn-secondary btn-circle btn-lg flex justify-center items-center group relative z-20 outline-base-content outline-offset-8 hover:ring hover:ring-secondary-content">
								<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill='none' className="w-8 h-8 pointer-events-none group-hover:fill-secondary-content">
									<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
								</svg>
							</button>
						)}
					</>
				)}
			</div>

			<div className="bg-gradient-to-b from-secondary to-primary h-12 w-12 rounded-full shadow-lg shadow-accent/20 flex items-center justify-center">
				{ state.start && state.time > 0 ? (
					<button type='button'
						title="Restart timer"
						onClick={() => dispatch({ type: timerActions.skip})}
						aria-label="Restart timer" className="group relative z-20 btn btn-circle items-center hover:btn-secondary hover:ring hover:ring-secondary-content hover:ring-inset outline-base-content btn-ghost text-secondary-content">
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pointer-events-none">
							<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
						</svg>
					</button>
				) : (
					<button type='button'
						title="Restart timer"
						disabled
						aria-label="Restart timer" aria-disabled="true" className="group relative z-20 btn btn-circle items-center text-accent/30">
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pointer-events-none">
							<path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
						</svg>
					</button>
				)}
			</div>
		</div>
	);
}