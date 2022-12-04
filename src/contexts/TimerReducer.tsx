import { Action, ActionTypes, initialStateTypes } from "../types/types"

export const TimerReducer = (state: initialStateTypes, action: Action) => {
	switch (action.type) {
		case timerActions.setTime:
			return {
				...state,
				time: action.time
			}
		case timerActions.setMode:
			return {
				...state,
				mode: action.mode,
				initialTime: state.settings.time[action.mode],
				start: false
			}
		case timerActions.start:
			return {
				...state,
				start: true
			}
		case timerActions.stop:
			return {
				...state,
				time: state.initialTime * 60,
				start: false
			}
		case timerActions.skip:
			return {
				...state,
				time: state.initialTime * 60,
				start: true
			}
		case timerActions.tickdown:
			return {
				...state,
				time: state.time > 0 ? state.time - 1 : 0
			}
	}
}

export const timerActions = {
	setTime: ActionTypes.setTime,
	setMode: ActionTypes.setMode,
	start: ActionTypes.start,
	stop: ActionTypes.stop,
	skip: ActionTypes.skip,
	tickdown: ActionTypes.tickdown
}

export const initialState: initialStateTypes = {
	time: 25 * 60,
	initialTime: 25 * 60,
	mode: 'pomodoro',
	settings: {
		time: {
			'pomodoro': 25,
			'long': 20,
			'short': 5,
		}
	},
	start: false
}