import { useTimer, useTimerDispatch } from "../../contexts/TimerContext" 

export default function ClockModeMenu(){
	const state = useTimer()
	const { onClick } = useTimerDispatch()

	return (
		<menu className="w-full max-w-xs relative z-20" role={"menu"} aria-label="Timer length">
				<div className="flex flex-wrap gap-2 justify-around items-center label-text-alt">
				{Object.entries(state.settings.time).map((item, index) => {
					return (
						<button key={index} aria-label={`${item[0]}, ${item[1]} minutes`} role={"menuitem"}
						onClick={() => onClick(item)}
						className={"btn btn-secondary btn-xs rounded-full"+ (state.mode === item[0] ? ' btn-accent shadow-lg shadow-accent/50' : ' shadow-md shadow-accent/20')}>
							{item[0]}
						</button>
					)
				})}
				</div>
			</menu>
	)
}