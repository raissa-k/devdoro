import { useEffect } from 'react';
import { ChallengeBox } from '../components/ChallengeBox'
import { Countdown } from '../components/Countdown'
import { CountdownProvider } from '../contexts/CountdownContext'
import { themeChange } from 'theme-change';
import ThemeChanger from '../components/ThemeChanger';
import ModalForm from '../components/Modal';
import TaskForm from '../components/TaskForm';
import dynamic from 'next/dynamic';

const TaskList = dynamic(() =>import("../components/TaskList"), {ssr: false})

export default function Home(){
	useEffect(() => {
		themeChange(false);
	  }, []);
	return (
    	<div className="p-6 sm:py-6 sm:px-12 my-0 mx-auto flex flex-col flex-1 max-w-sm md:max-w-4xl">
		<ThemeChanger />
			<CountdownProvider>
			<section className="flex flex-col flex-1 md:grid grid-cols-2 gap-8 content-start">
				<div className="">
				<Countdown />
				<div className='my-6 bg-accent/20 rounded-box shadow-lg shadow-accent/10 py-12 px-8 flex flex-col items-center justify-center border border-accent/30'>
				<TaskForm />
				<TaskList />
				</div>
				</div>

				<div>
				<ChallengeBox />
				</div>
			</section>
			</CountdownProvider>
		</div>
  )
}