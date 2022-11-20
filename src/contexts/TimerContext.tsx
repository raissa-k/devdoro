import {createContext, Dispatch, ReactNode, useCallback, useContext, useEffect, useMemo, useReducer, useState} from "react";
import {TimerReducer, initialState, timerActions} from "./TimerReducer";

interface TimerProviderProps {
	children: ReactNode
}

interface TimerContextData {
	time: number;
    initialTime: number;
    mode: string;
    settings: {
        time: {
            pomodoro: number;
            'long break': number;
            'short break': number;
        };
    };
    start: boolean;
}

interface TimerDispatchContextData {
	onClick: (item: object) => void,
	convertTime: (arg: number) => string,
	waveHeight: number,
	dispatch: Dispatch<any>
}

export const TimerContext = createContext({} as TimerContextData)
export const TimerDispatchContext = createContext({} as TimerDispatchContextData)

export default function TimerProvider({ children }: TimerProviderProps){
	const [state, dispatch] = useReducer(TimerReducer, initialState)
	const [value, setValue] = useState({
		mode: initialState.mode,
		time: Object.values(initialState.settings.time)[0]
	})
    
	const waveHeight = useMemo<number>(() => {
		return ~~((1 - state.time / (state.settings.time[state.mode] * 60)) * 100) 
	}, [state])


	const convertTime = (_seconds: number) => {
        return new Date(_seconds * 1000).toISOString().substring(14, 19);
    };

	const onClick = useCallback((item: [string, number]) => {
        setValue({
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
			})

		dispatch({
			type: timerActions.setTime,
			time: item[1] * 60,
		});
    }, [dispatch]);

	useEffect(() => {
		const audio = new Audio('/notification.mp3')
		audio.volume = 0.25
		if (state.start && state.time === 0) audio.play()
        if (!state.start || state.time === 0) {
            return ;
        }
        const tick = setInterval(() => {
            dispatch({
                type: timerActions.tickdown,
            });
        }, 1000);
        return () => {
			if(!tick){
				return;
            }
            clearInterval(tick);
        }
    }, [state])

    return (
        <TimerContext.Provider value={state}>
			<TimerDispatchContext.Provider value={{onClick, convertTime, dispatch, waveHeight}}>
            {children}
			</TimerDispatchContext.Provider>
        </TimerContext.Provider>
    );
}

export function useTimer() {
    return useContext(TimerContext);
}

export function useTimerDispatch(){
	return useContext(TimerDispatchContext)
}


