import { useTimer, useTimerDispatch } from "../../contexts/TimerContext" 

export default function ClockModeMenu(){
	const state = useTimer()
	const { handleModeChange } = useTimerDispatch()

	return (
		<menu className="w-full max-w-xs relative z-20" role={"menu"} aria-label="Timer length">
				<div className="flex flex-wrap gap-2 justify-around items-center label-text-alt">
				{Object.entries(state.settings.time).map((item, index) => {
					return (
						<button key={index} aria-label={`${item[0]}, ${item[1]} minutes`} role={"menuitem"}
						onClick={() => handleModeChange(item)}
						className={"btn btn-secondary outline-base-content btn-sm rounded-full"+ (state.mode === item[0] ? ' btn-accent shadow-lg shadow-secondary/50' : ' shadow-md shadow-accent/30')}>
							{item[0]}
						</button>
					)
				})}
				</div>
			</menu>
	)
}