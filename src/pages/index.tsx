import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Timer } from '../components/Countdown/Timer';
import { Tasks } from '../components/Tasks/Tasks';
import Tabs from '../components/Menus/Tabs';
import Background from '../components/Background';
import { useRouter } from 'next/router';
import { ModalContext } from '../contexts/ModalContext';

export default function Home({ router }){
	router = useRouter()
	const { query: { tab } } = router

	const isTimerTab = tab === "timer" || tab == null
	const isTaskTab = tab === "tasks"

	useEffect(() => {
		themeChange(false);
	  }, []);

	return (
		<>
		<Background />
    	<div className="p-6 sm:py-6 sm:px-12 my-0 mx-auto flex flex-col flex-1 max-w-sm md:max-w-4xl">
			<Tabs />

			{isTimerTab && <Timer/>}
			{isTaskTab && <Tasks/>}
		</div>
		</>
  )
}