import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext'
import { ModalContext } from '../../contexts/ModalContext'

export function CountdownMenu() {
	const { isFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)
	const { openModal } = useContext(ModalContext)

	return (
			<div role={"menu"}>
				<svg aria-hidden="true" width="138" height="49" viewBox="0 0 138 49" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1/2 -translate-x-1/2 bottom-[4.75rem]">
				<path d="M37.5 49C50 34.1889 35.5 19.5889 0 0H138C101.5 19.5889 86 34.1889 100 49H37.5Z" className='fill-secondary'/>
				</svg>

				<div className="bg-gradient-to-b from-secondary to-primary h-12 w-12 absolute left-0 bottom-6 rounded-full shadow-lg shadow-accent/20">
				</div>

				<div className="text-secondary-content bg-gradient-to-b from-secondary to-secondary-focus h-20 w-20 rounded-full absolute left-1/2 -translate-x-1/2 bottom-[0.7rem] border-secondary border-4 shadow-lg shadow-accent/20">
					

					{ isFinished ? (
					<button
					aria-label='Cycle ended'  
					disabled
					className="btn btn-secondary btn-circle btn-disabled btn-lg absolute left-1/2 -translate-x-1/2 top-1 flex justify-center items-center">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
					</button>
				) : (
					<>
					{ isActive ? (
						<button type='button' onClick={resetCountdown} aria-label="Reset countdown" className="btn btn-ghost hover:btn-secondary btn-circle btn-lg absolute left-1/2 -translate-x-1/2 top-1 flex justify-center items-center group">
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill='none' className="w-8 h-8 ml-1 pointer-events-none">
								<path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
							</svg>

						</button>
					) : (
						<button type='button' onClick={startCountdown} aria-label="Start countdown" className="btn btn-ghost hover:btn-secondary btn-circle btn-lg absolute left-1/2 -translate-x-1/2 top-1 flex justify-center items-center group">
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" fill='none' className="w-8 h-8 ml-1 pointer-events-none group-hover:fill-secondary-content">
							<path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
						</svg>
					</button>
					)}
					</>
				)}
				</div>

				<div className="bg-gradient-to-b from-secondary to-primary h-12 w-12 absolute right-0 bottom-6 rounded-full shadow-lg shadow-accent/20">
					<button type='button' onClick={openModal} aria-label="Get break exercise" className={'btn btn-circle btn-sm left-1/2 -translate-x-1/2 top-2 flex justify-center items-center group relative overflow-hidden '+(isFinished ? ' btn-accent bg-opacity-80 border-opacity-80 shadow-md shadow-accent/80 hover:btn-secondary' : ' btn-ghost text-accent hover:btn-secondary')}>
						<span className={isFinished ? "shine" : " "}></span>
						<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 pointer-events-none group-hover:fill-secondary-content">
							<path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
						</svg>
					</button>
				</div>
			</div>
	)
}