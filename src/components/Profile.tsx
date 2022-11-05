import styles from '../styles/components/Profile.module.css'

export function Profile(){
	return (
		<div className={styles.profileContainer}>
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg" alt="Profile picture"/>
			<div>
				<strong>Gastly</strong>
				<p>
					<img src="icons/level.svg" alt="Level up symbol" />
					Level 1
					</p>
			</div>
		</div>

	)
}