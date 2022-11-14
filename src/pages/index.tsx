import { useEffect } from 'react';
import { themeChange } from 'theme-change';
import { Timer } from '../components/Timer';
import { Tasks } from '../components/Tasks';
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
		<>
		<svg aria-hidden="true" tabIndex={-1} width="274" height="476" viewBox="0 0 274 476" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-0 left-0 blur-md -z-10">
		<path d="M-44.3799 15.1515C10.581 -16.5074 68.8534 -18.2158 121.83 -12.0253C179.739 -5.25864 241.679 4.64051 263.113 51.0824C285.208 98.9566 270.338 166.682 230.377 223.166C194.656 273.657 129.751 292.288 72.8674 319.99C-56.5172 383 -52.1684 479.631 -101 475.5C-153.923 471.023 -174.851 341.731 -190.361 297.724C-205.614 254.447 -184.418 200.14 -158.117 149.232C-131.696 98.0882 -97.902 45.9816 -44.3799 15.1515Z" className="fill-accent/10"/>
		</svg>

		<svg aria-hidden="true" tabIndex={-1} width="359" height="337" viewBox="0 0 159 337" fill="none" className="absolute bottom-0 right-0 blur-md -z-10" xmlns="http://www.w3.org/2000/svg">
		<path d="M320.592 359.806C266.574 393.048 208.375 396.447 155.241 391.797C97.1605 386.714 34.959 378.617 12.1857 332.817C-11.2899 285.605 1.60802 217.476 39.9125 159.856C74.1529 108.349 138.49 87.8422 194.545 58.5004C245.16 32.006 295.819 -2.42112 344.75 0.29012C397.781 3.22856 441.528 29.5774 458.309 73.1156C474.811 115.931 455.201 170.83 430.389 222.481C405.464 274.37 373.197 327.436 320.592 359.806Z" className="fill-accent/10"/>
		</svg>


    	<div className="p-6 sm:py-6 sm:px-12 my-0 mx-auto flex flex-col flex-1 max-w-sm md:max-w-4xl">
			
		

		<Tabs />

		{isTimerTab && <Timer/>}
        {isTaskTab && <Tasks/>}

		</div>
		</>
  )
}