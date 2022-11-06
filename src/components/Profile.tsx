import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile(){
	const { level } = useContext(ChallengesContext)
	return (
		<div className={styles.profileContainer}>
			<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg" alt="Profile picture"/>
			<div>
				<strong>Gastly</strong>
				<p>
					<img src="icons/level.svg" alt="Level up symbol" />
					Level { level }
					</p>
			</div>
		</div>

	)
}