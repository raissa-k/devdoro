import Image from 'next/image'
import { useContext } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext'
import { CountdownMenu } from './CountdownMenu'

export function Countdown() {
	const { 
		minutes,
		seconds
	} = useContext(CountdownContext)

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

	const timerLengths = [
		{
			name: "Pomodoro",
			minutes: 25,
			function: "seeAll"
		},
		{
			name: "Short break",
			minutes: 5,
			function: "seeAll"
		},
		{
			name: "Long break",
			minutes: 20,
			function: "seeAll"
		}
	  ]

	return (
		<section aria-label='Countdown' className="mx-auto w-full max-w-xs mt-8 flex flex-col items-center justify-center gap-6 relative">

			<menu className="w-full max-w-xs relative z-20" role={"menu"} aria-label="Timer length">
				<div className="flex flex-wrap gap-2 justify-around items-center label-text-alt">
				{timerLengths.map((item, index) => {
					return (
						<button key={index} aria-label={`${item.name}, ${item.minutes} minutes`} role={"menuitem"}
						className="btn btn-secondary btn-xs rounded-full shadow-md shadow-accent/20">
							{item.name}
						</button>
					)
				})}
				</div>
			</menu>

			<div className="flex items-center justify-center rounded-full w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-b from-secondary-focus via-accent/70 to-accent/70 border-secondary border-[0.35rem] shadow-lg shadow-accent/20 relative z-20 overflow-hidden">
				<div role="timer" className='relative z-30'>
					<time aria-labelledby="timerP"></time>
					<p id="timerP" aria-hidden="true" className="text-6xl sm:text-7xl text-accent-content/80 font-bold font-sans">{minuteLeft}{minuteRight}:{secondLeft}{secondRight}</p>
				</div>
				<div className="absolute bottom-0 z-20 h-[0%] w-screen align-bottom bg-[url('/images/waves.svg')]">
				</div>
			</div>

			<CountdownMenu/>
		</section>
	)}