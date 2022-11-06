import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
	const hasActiveChallenge = true

	return (
		<div className={styles.challengeBoxContainer}>
			{ hasActiveChallenge ? (
				<div className={styles.challengeActive}>
					<header>Win 400 experience points</header>
					<main>
						<img src="icons/body.svg" alt="" />
						<strong>New Challenge</strong>
						<p>Do a 3-minute walk</p>
					</main>
					<footer>
						<button type='button' className={styles.challengeFailedButton}>
							I failed
						</button>

						<button type='button' className={styles.challengeSucceededButton}>
							I succeeded
						</button>
					</footer>
				</div>
			) : (
			<div className={styles.challengeNotActive}>
				<strong>Finish a cycle to receive a challenge</strong>
				<p>
					<img src="icons/level-up.svg" alt="Level up" />
					Raise your level by completing challenges
				</p>
			</div>
			) }
		</div>
	)
}