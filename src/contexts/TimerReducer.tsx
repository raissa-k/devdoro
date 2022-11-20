export const TimerReducer = (state: initialState, action: Action) => {
	switch (action.type) {
		case timerActions.setTime: {
			return {
				...state,
				time: action.time
			}
		}
		case timerActions.setMode: {
			return {
				...state,
				mode: action.mode,
				initialTime: state.settings.time[action.mode],
				start: false
			}
		}
		case timerActions.start: {
			return {
				...state,
				start: true
			}
		}
		case timerActions.stop: {
			return {
				...state,
				time: state.initialTime * 60,
				start: false
			}
		}
		case timerActions.skip: {
			return {
				...state,
				time: state.initialTime * 60,
				start: true
			}
		}
		case timerActions.tickdown: {
			return {
				...state,
				time: state.time > 0 ? state.time - 1 : 0
			}
		}
	}
}

enum ActionTypes {
	setTime = 'set_time',
	setMode = 'set_mode',
	start = 'timer_start',
	stop = 'timer_stop',
	skip = 'timer_skip',
	tickdown = 'tickdown'
}

type Action = {
	type: ActionTypes,
	time?: number,
	mode?: string
}

export const timerActions = {
	setTime: ActionTypes.setTime,
	setMode: ActionTypes.setMode,
	start: ActionTypes.start,
	stop: ActionTypes.stop,
	skip: ActionTypes.skip,
	tickdown: ActionTypes.tickdown
}

interface initialState {
	time: number,
	initialTime: number,
	mode: string,
	settings: {
		time: {
			'pomodoro': number,
			'long break': number,
			'short break': number,
		}
	},
	start: boolean
}

export const initialState: initialState = {
	time: 25 * 60,
	initialTime: 25 * 60,
	mode: 'pomodoro',
	settings: {
		time: {
			'pomodoro': 25,
			'long break': 20,
			'short break': 5,
		}
	},
	start: false
}