import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Timer } from '../components/Timer/Timer';
import { Tasks } from '../components/Tasks/Tasks';
import Tabs from '../components/Menus/Tabs';
import Background from '../components/Background';
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
		<>
		<Background />
		<Tabs />
			{isTimerTab && <Timer/>}
			{isTaskTab && <Tasks/>}
		</>
  )
}