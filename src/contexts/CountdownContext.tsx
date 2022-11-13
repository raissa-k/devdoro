import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from '../../challenges.json'

interface Challenge {
	type: 'body' | 'eye';
	description: string;
}

interface CountdownContextData {
	minutes: number
	seconds: number
	isFinished: boolean
	isActive: boolean
	activeChallenge: Challenge;
	startCountdown: () => void
	resetCountdown: () => void
	resetChallenge: () => void
	completeChallenge: () => void
	startNewChallenge: () => void
}

interface CountdownProviderProps {
	children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps){
	const [time, setTime] = useState(25 * 60)
	const [isActive, setIsActive] = useState(false)
	const [isFinished, setIsFinished] = useState(false)
	const [activeChallenge, setActiveChallenge] = useState(null)

	const minutes = Math.floor(time / 60)
	const seconds = time % 60

	function startCountdown() {
		setIsActive(true)
	}

	function resetCountdown() {
		clearTimeout(countdownTimeout)
		setIsActive(false)
		setIsFinished(false)
		setTime(25 * 60)
	}

	function resetChallenge(){
		setActiveChallenge(null)
	}

	function completeChallenge(){
		if (!activeChallenge) return
		setActiveChallenge(null)
	}

	function startNewChallenge(){
		let randomChallengeIndex = Math.floor(Math.random() * challenges.length)
		const challenge = challenges[randomChallengeIndex]
		setActiveChallenge(challenge)

		new Audio('/notification.mp3').play()
	}

	useEffect(() => {
		if (isActive && time > 0) {
			countdownTimeout = setTimeout(() => {
				setTime(time - 1)
			}, 1000);
		} else if (isActive && time === 0) {
			setIsFinished(true)
			setIsActive(false)
			startNewChallenge()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isActive, time])


	return (
		<CountdownContext.Provider value={{
			minutes,
			seconds,
			isFinished,
			isActive,
			activeChallenge,
			startCountdown,
			resetCountdown,
			resetChallenge,
			completeChallenge,
			startNewChallenge
		}}>
			{children}
		</CountdownContext.Provider>
	)
}