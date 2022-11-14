import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Timer } from '../components/Timer';
import { Tasks } from '../components/Tasks';
import ThemeChanger from '../components/ThemeChanger';
import Tabs from '../components/Tabs';
import { useRouter } from 'next/router';

export default function Home({ router }){
	router = useRouter()
	const { query: { tab } } = router

	const isTimerTab = tab === "timer" || tab == null
	const isTaskTab = tab === "tasks"

	useEffect(() => {
		themeChange(false);
	  }, []);

	return (
    	<div className="p-6 sm:py-6 sm:px-12 my-0 mx-auto flex flex-col flex-1 max-w-sm md:max-w-4xl">
		<ThemeChanger />
		<Tabs />

		{isTimerTab && <Timer/>}
        {isTaskTab && <Tasks/>}

		</div>
  )
}