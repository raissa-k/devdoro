import { useTimer, useTimerDispatch } from "../../contexts/TimerContext";
import ClockModeMenu from "./ClockModeMenu";
import ClockActionsMenu from "./ClockActionsMenu";
import Image from "next/image";

export default function Clock(){
	const state = useTimer();
	const { waveHeight, convertTime } = useTimerDispatch();

	return (
		<>
			<section aria-label='Countdown' className="mx-auto w-full max-w-xs mt-8 flex flex-col items-center justify-center gap-6 relative">

				<ClockModeMenu />

				<div className="flex items-center justify-center rounded-full w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20 border-secondary border-[0.35rem] shadow-lg shadow-accent/20 relative z-20 overflow-hidden">
					<div role="timer" className='relative z-30'>
						<time className="text-6xl sm:text-7xl text-accent-content/80 font-bold font-sans">{convertTime(state.time)}</time>
					</div>
					<div className="absolute bottom-0 transition-all z-20 w-full align-bottom bg-[url('/images/waves.svg')]" style={{height: `${waveHeight}%`}}>
					</div>
				</div>

				<ClockActionsMenu/>
			</section>
			<div className="mx-auto absolute w-full max-w-screen grid justify-center overflow-hidden">
				<Image src="/icons/Backdrop.svg" priority width={380} height={380} alt="" className=" fill-accent max-w-screen-sm max-h-screen blur-md"/>
			</div>
		</>
	);
}