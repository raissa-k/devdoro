/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import { ModalContext } from '../contexts/ModalContext'

export function Exercise() {
	const { activeChallenge, resetChallenge, resetCountdown } = useContext(CountdownContext)
	const { closeModal } = useContext(ModalContext)

	function handleChallengeDone(){
		resetChallenge()
		resetCountdown()
		closeModal()
	}

	return (
		<section className="flex flex-col items-center justify-center" aria-labelledby='challengeTitle'>
			{ activeChallenge ? (
				<div className="flex flex-col gap-6 text-center leading-7">
						<img src={`icons/${activeChallenge.type}.svg`} className="h-20" alt="" />
						<p>{activeChallenge.description}</p>
						<button type='button' 
						aria-label='Move to next timer'
						className="btn btn-secondary mx-auto rounded-full"
						onClick={handleChallengeDone}>
							Move to next timer
						</button>
				</div>
			) : (
			<div className="flex flex-col items-center justify-center text-center gap-8">
				<p id="challengeTitle" className="text-2xl font-bold">Finish a cycle, get a stretch suggestion</p>
				<Image src={"/icons/hourglass.svg"} width={80} height={80} className="h-20" alt=""/>
				<p className="text-lg">
					Remember to take care of yourself.
				</p>
			</div>
			) }
		</section>
	)
}