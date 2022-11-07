import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
	const { level, closeModal } = useContext(ChallengesContext)
	return (
		<div className={styles.overlay}>
			<div className={styles.container}>
				<header>{level}</header>
				<strong>Congratulations</strong>
				<p>You have leveled up!</p>

				<button type='button' onClick={closeModal}>
					<img src="/icons/close.svg" alt="Close modal" />
				</button>
			</div>
		</div>
	)
}