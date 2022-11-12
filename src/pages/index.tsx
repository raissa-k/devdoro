import { useEffect } from 'react';
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { CountdownProvider } from '../contexts/CountdownContext'
import { themeChange } from 'theme-change';
import ThemeChanger from '../components/ThemeChanger';

/*Initialize under useEffect */


export default function Home(){
	useEffect(() => {
		themeChange(false);
	  }, []);
	return (
    	<div className="h-screen py-6 px-12 my-0 mx-auto flex flex-col flex-1 max-w-sm md:max-w-4xl">
			<CountdownProvider>
			<section className="flex flex-col flex-1 md:grid grid-cols-2 gap-8 content-start">
				<div className="">
				<Countdown />
				</div>

				<div>
				<ChallengeBox />
				</div>
			</section>
			</CountdownProvider>
			<ThemeChanger />
		</div>
  )
}