import {createContext, useCallback, useContext, useEffect, useMemo, useReducer, useState} from "react";
import { TimerContextDataTypes, TimerDispatchContextDataTypes, TimerProviderPropTypes } from "../types/types";
import {TimerReducer, initialState, timerActions} from "./TimerReducer";

export const TimerContext = createContext({} as TimerContextDataTypes);
export const TimerDispatchContext = createContext({} as TimerDispatchContextDataTypes);

export default function TimerProvider({ children }: TimerProviderPropTypes){
	const [state, dispatch] = useReducer(TimerReducer, initialState);
	const [duration, setDuration] = useState(initialState);

	const waveHeight = useMemo(() => {
		return ~~((1 - state.time / (state.settings.time[state.mode] * 60)) * 100);
	}, [state]);

	const convertTime = (_seconds: number) => {
		return new Date(_seconds * 1000).toISOString().substring(14, 19);
	};

	const handleModeChange = useCallback((item: [string, number]) => {
		setDuration({
			...state,
			mode: item[0],
			time: item[1]
		});
		dispatch({
			type: timerActions.setTime,
			time: item[1]
		});
		dispatch({
			type: timerActions.setMode,
			mode: item[0],
			time: item[1] * 60
		});
		dispatch({
			type: timerActions.setTime,
			time: item[1] * 60
		});
	}, [state, dispatch]);

	useEffect(() => {
		const audio = new Audio("/notification.mp3");
		audio.volume = 0.25;
		if (state.start && state.time === 0) audio.play();
		if (!state.start || state.time === 0) {
			return;
		}
		const tick = setInterval(() => {
			dispatch({
				type: timerActions.tickdown
			});
		}, 1000);
		return () => {
			if(!tick){
				return;
			}
			clearInterval(tick);
		};
	}, [state]);

	return (
		<TimerContext.Provider value={state}>
			<TimerDispatchContext.Provider value={{handleModeChange, convertTime, dispatch, waveHeight}}>
				{children}
			</TimerDispatchContext.Provider>
		</TimerContext.Provider>
	);
}

export function useTimer() {
	return useContext(TimerContext);
}

export function useTimerDispatch(){
	return useContext(TimerDispatchContext);
}