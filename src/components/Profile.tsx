import styles from '../styles/components/Profile.module.css'

export function Profile(){
	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/raissa-k.png" alt="Profile picture"/>
			<div>
				<strong>Raissa K.</strong>
				<p>
					<img src="icons/level.svg" alt="Level up symbol" />
					Level 1
					</p>
			</div>
		</div>

	)
}