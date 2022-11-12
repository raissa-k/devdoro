/* eslint-disable @next/next/no-img-element */
import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'

export function ChallengeBox() {
	const { activeChallenge, resetChallenge, resetCountdown } = useContext(CountdownContext)

	function handleChallengeDone(){
		resetChallenge()
		resetCountdown()
	}

	return (
		<section className="bg-accent/20 rounded-box shadow-lg shadow-accent/10 py-12 px-8 flex flex-col items-center justify-center border border-accent/30" aria-labelledby='challengeTitle'>
			{ activeChallenge ? (
				<div className="flex flex-col gap-6">
					<header className="text-3xl font-bold text-center">
						<h1 id='challengeTitle'>New Challenge</h1>
					</header>
					<main className="flex flex-col gap-6 text-center text-lg">
						<img src={`icons/${activeChallenge.type}.svg`} className="h-20" alt="" />
						<p>{activeChallenge.description}</p>
					</main>
						<button type='button' 
						aria-label='Move to next timer'
						className="btn btn-secondary mx-auto rounded-full"
						onClick={handleChallengeDone}>
							Move to next timer
						</button>
				</div>
			) : (
			<div className="flex flex-col items-center justify-center text-center gap-8">
				<h1 id="challengeTitle" className="text-3xl font-bold">Finish a cycle to receive a challenge</h1>
				<svg width="59" aria-hidden="true" className="h-20 opacity-80" height="80" viewBox="0 0 59 80" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M43.3272 33.5322V58.4572H15.1403V33.5322H3.86548L29.2337 3.04053L54.602 33.5322H43.3272Z" className="fill-secondary-focus"/>
					<path d="M55.6392 36.3211C54.7902 36.3211 53.95 35.9714 53.3703 35.2944L29.2812 7.16071L5.195 35.2944C4.16738 36.4945 2.32878 36.6651 1.07573 35.6916C-0.177327 34.7097 -0.361767 32.9502 0.659999 31.7557L27.0122 0.975602C28.1277 -0.325201 30.4318 -0.325201 31.5472 0.975602L57.9023 31.7557C58.927 32.9502 58.7397 34.7125 57.4866 35.6916C56.945 36.1141 56.2921 36.3211 55.6392 36.3211Z" className="fill-secondary"/>
					<path d="M14.6423 61.4982C13.0233 61.4982 11.7146 60.2478 11.7146 58.7008V33.524C11.7146 31.977 13.0233 30.7266 14.6423 30.7266C16.2613 30.7266 17.57 31.977 17.57 33.524V58.7008C17.57 60.2478 16.2613 61.4982 14.6423 61.4982Z" className="fill-secondary"/>
					<path d="M43.9193 61.4979H14.6423C13.0233 61.4979 11.7146 60.2475 11.7146 58.7005C11.7146 57.1535 13.0233 55.9031 14.6423 55.9031H43.9193C45.5383 55.9031 46.847 57.1535 46.847 58.7005C46.847 60.2475 45.5383 61.4979 43.9193 61.4979Z" className="fill-secondary"/>
					<path d="M43.9199 61.4982C42.3009 61.4982 40.9922 60.2478 40.9922 58.7008V33.524C40.9922 31.977 42.3009 30.7266 43.9199 30.7266C45.5389 30.7266 46.8476 31.977 46.8476 33.524V58.7008C46.8476 60.2478 45.5389 61.4982 43.9199 61.4982Z" className="fill-secondary"/>
					<path d="M14.6431 36.3214H2.92941C1.31039 36.3214 0.00170898 35.071 0.00170898 33.524C0.00170898 31.977 1.31039 30.7266 2.92941 30.7266H14.6431C16.2621 30.7266 17.5708 31.977 17.5708 33.524C17.5708 35.071 16.2621 36.3214 14.6431 36.3214Z" className="fill-secondary"/>
					<path d="M55.6365 36.3214H43.9199C42.3009 36.3214 40.9922 35.071 40.9922 33.524C40.9922 31.977 42.3009 30.7266 43.9199 30.7266H55.6365C57.2555 30.7266 58.5642 31.977 58.5642 33.524C58.5642 35.071 57.2555 36.3214 55.6365 36.3214Z" className="fill-secondary"/>
					<path d="M34.872 39.2014H23.5973C22.0385 39.2014 20.7786 37.9222 20.7786 36.3397C20.7786 34.7572 22.0385 33.478 23.5973 33.478H34.872C36.4308 33.478 37.6907 34.7572 37.6907 36.3397C37.6907 37.9222 36.4308 39.2014 34.872 39.2014Z" className="fill-secondary-content"/>
					<path d="M29.2342 44.9222C27.6755 44.9222 26.4155 43.643 26.4155 42.0605V30.6194C26.4155 29.0369 27.6755 27.7577 29.2342 27.7577C30.793 27.7577 32.0529 29.0369 32.0529 30.6194V42.0605C32.0529 43.643 30.793 44.9222 29.2342 44.9222Z" className="fill-secondary-content"/>
					<rect x="11.6938" y="65.1582" width="35.1773" height="5.59071" rx="2.79536" className="fill-secondary"/>
					<rect x="11.6938" y="74.4093" width="35.1773" height="5.59071" rx="2.79536" className="fill-secondary"/>
					</svg>
				<p className="text-lg">
					Remember to take care of yourself.
				</p>
			</div>
			) }
		</section>
	)
}