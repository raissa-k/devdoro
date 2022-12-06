import { Action, ActionTypes, initialStateTypes } from "../types/types"

export const TimerReducer = (state: initialStateTypes, action: Action) => {
	// destructure the `settings` and `time` properties from `state`
	const { settings, time } = state;
  
	// destructure the `time` property from `settings`
	const { time: settingsTime } = settings;

	// destructure the `mode` property from `action`
	const { mode } = action;

	switch (action.type) {
		case timerActions.setTime:
			return {
				...state,
				time: action.time
			}
		case timerActions.setMode:
			return {
				...state,
				mode,
				initialTime: settingsTime[mode],
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
				time: settingsTime[mode],
				start: false
			}
		case timerActions.skip:
			return {
				...state,
				time: settingsTime[mode],
				start: true
			}
		case timerActions.tickdown:
			return {
				...state,
				time: time > 0 ? time - 1 : 0
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