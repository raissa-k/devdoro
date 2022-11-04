import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
	return (
		<header className={styles.experienceBar}>
			<span>0 exp</span>
			<div>
				<div style={{ width: '50%' }}/>
				<span style={{ left: '50%' }} className={ styles.currentExperience }>300 exp</span>
			</div>
			<span>600 exp</span>
		</header>
	)
}