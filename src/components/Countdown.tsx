import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

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
		<div>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{ isFinished ? (
				<button  
				disabled
				className={styles.countdownButton}>
					Cycle ended
			</button>
			) : (
				<>
				{ isActive ? (
					<button 
					type='button'
					className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
					onClick={resetCountdown}>
						Reset cycle
				</button>
				) : (
					<button 
					type='button'
					className={styles.countdownButton}
					onClick={startCountdown}>
						Start cycle
					</button>
				)}
				</>
			)}
		</div>
	)
}