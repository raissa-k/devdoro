/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

export function Exercise() {
	const { activeChallenge, resetChallenge, resetCountdown } = useContext(CountdownContext)

	function handleChallengeDone(){
		resetChallenge()
		resetCountdown()
	}

	return (
		<section className="bg-accent/20 rounded-box shadow-lg shadow-accent/10 py-12 px-8 flex flex-col items-center justify-center border border-accent/30" aria-labelledby='challengeTitle'>
			{ activeChallenge ? (
				<div className="flex flex-col gap-6">
					<header className="text-3xl font-bold text-center">
						<h1 id='challengeTitle'>New Exercise</h1>
					</header>
					<main className="flex flex-col gap-6 text-center text-lg">
						<img src={`icons/${activeChallenge.type}.svg`} className="h-20" alt="" />
						<p>{activeChallenge.description}</p>
					</main>
						<button type='button' 
						aria-label='Move to next timer'
						className="btn btn-secondary mx-auto rounded-full"
						onClick={handleChallengeDone}>
							Move to next timer
						</button>
				</div>
			) : (
			<div className="flex flex-col items-center justify-center text-center gap-8">
				<h1 id="challengeTitle" className="text-3xl font-bold">Finish a cycle, get a stretch suggestion</h1>
				<Image src={"/icons/hourglass.svg"} width={80} height={80} className="h-20" alt=""/>
				<p className="text-lg">
					Remember to take care of yourself.
				</p>
			</div>
			) }
		</section>
	)
}