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

	return (
		<>
		<section aria-label='Countdown' className="absolute z-20 top-36 w-52 h-72 left-1/2 -translate-x-1/2">
				<svg width="122" height="17" viewBox="0 0 122 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute left-1/2 -translate-x-1/2 -top-[0.75rem]'>
					<path d="M30 17C42.5 8.28004 35.5 0 0 0H122C82 0 78 8.28004 92 17H30Z" className='fill-secondary'/>
				</svg>
			<div className="w-48 h-48 rounded-full bg-gradient-to-b from-secondary-focus via-secondary to-secondary mx-auto border-secondary border-[0.35rem] shadow-md shadow-accent/40">
				<div role="timer">
					<time aria-labelledby="timerP"></time>
					<p id="timerP" aria-hidden="true" className="absolute text-secondary-content text-5xl font-bold font-sans left-1/2 -translate-x-1/2 top-24 -translate-y-6 z-30">{minuteLeft}{minuteRight}:{secondLeft}{secondRight}</p>
				</div>
			</div>

			<CountdownMenu/>


		</section>
		<Image src="/icons/Backdrop.svg" priority width={320} height={320} alt="" className="absolute z-10 top-14 left-1/2 -translate-x-1/2 fill-accent blur-md"/>
		</>
	)
}