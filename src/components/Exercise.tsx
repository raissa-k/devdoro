/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useContext, useEffect, useState } from 'react'
import { timerActions } from "../contexts/TimerReducer";
import { ModalContext } from '../contexts/ModalContext'
import { useTimer, useTimerDispatch } from '../contexts/TimerContext';
import challenges from '../../challenges.json'
import { ChallengeTypes } from '../types/types';

export function Exercise() {
	const [activeChallenge, setActiveChallenge] = useState<ChallengeTypes | null>()
	const { closeModal } = useContext(ModalContext)
	const state = useTimer()
	const { dispatch } = useTimerDispatch()

	function resetChallenge(){
		setActiveChallenge(null)
	}

	function startNewChallenge(){
		let randomChallengeIndex = Math.floor(Math.random() * challenges.length)
		const challenge = challenges[randomChallengeIndex] as ChallengeTypes
		setActiveChallenge(challenge)
	}

	useEffect(() => {
		if (state.mode.match("pomodoro") && state.start && state.time === 0) {
			startNewChallenge()
		}
	}, [state])

	function handleRepeatTimer(){
		resetChallenge()
		dispatch({ type: timerActions.skip})
		closeModal()
	}
	function handleEndCycle(){
		resetChallenge()
		dispatch({ type: timerActions.stop})
		closeModal()
	}

	return (
		<section className="flex flex-col items-center justify-center" aria-labelledby='challengeTitle'>
			{ activeChallenge ? (
				<div className="flex flex-col gap-6 text-center leading-7">
						<img src={`icons/${activeChallenge.type}.svg`} className="h-20" alt="" />
						<p>{activeChallenge.description}</p>
						<footer className='flex flex-wrap gap-4'>
							<button type='button' 
							aria-label='Repeat timer'
							className="btn btn-accent mx-auto rounded-full"
							onClick={handleRepeatTimer}>
								Repeat timer
							</button>
							<button type='button' 
							aria-label='End this cycle'
							className="btn btn-secondary mx-auto rounded-full"
							onClick={handleEndCycle}>
								End cycle
							</button>
						</footer>
				</div>
			) : (
			<div className="flex flex-col items-center justify-center text-center gap-8 p-6">
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