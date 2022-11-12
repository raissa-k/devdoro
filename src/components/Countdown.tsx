import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {
	const { 
		minutes,
		seconds,
		isFinished,
		isActive,
		startCountdown,
		resetCountdown } = useContext(CountdownContext)

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

	return (
		<section aria-label='Countdown' className='countdownContainer flex flex-col gap-6'>
			<div className='sr-only'>
			<h2>Time left in minutes and seconds</h2>
			<div role="timer" id='countdownTimer'><time>{minutes}:{seconds}</time></div>
			</div>			  
			
			<div>
			<div id='counter' className="flex items-center" aria-hidden="true">
				<div className="flex flex-1 justify-evenly items-center text-center text-8xl leading-normal">
					<span className="flex-1 mr-px border bg-accent/20 rounded-box border-accent/30 shadow-md shadow-accent/10">{minuteLeft}</span>
					<span className="flex-1 ml-px border bg-accent/20 rounded-box border-accent/30 shadow-md shadow-accent/10">{minuteRight}</span>
				</div>
				<span className="text-base-content text-8xl mx-2">:</span>
				<div className="flex flex-1 justify-evenly items-center text-center text-8xl leading-normal">
					<span className="flex-1 mr-px border bg-accent/20 rounded-box border-accent/30 shadow-md shadow-accent/10">{secondLeft}</span>
					<span className="flex-1 ml-px border bg-accent/20 rounded-box border-accent/30 shadow-md shadow-accent/10">{secondRight}</span>
				</div>
			</div>
			</div>

			{ isFinished ? (
				<button
				aria-label='Cycle ended'  
				disabled
				className="btn btn-secondary btn-disabled btn-lg">
					Cycle ended
			</button>
			) : (
				<>
				{ isActive ? (
					<button
					aria-label='Reset cycle' 
					type='button'
					className="btn btn-accent btn-lg rounded-full"
					onClick={resetCountdown}>
						Reset cycle
				</button>
				) : (
					<button 
					type='button'
					aria-label='Start cycle' 
					className="btn btn-secondary btn-lg rounded-full"
					onClick={startCountdown}>
						Start cycle
					</button>
				)}
				</>
			)}
		</section>
	)
}