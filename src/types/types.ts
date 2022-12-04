import { ChangeEvent, Dispatch, FormEvent, ReactNode, SetStateAction, SyntheticEvent } from "react";

export interface ITask {
    id?: number;
    task: string;
    done: 0|1;
	order?: number;
}

export interface initialStateTypes {
	time: number,
	initialTime: number,
	mode: string,
	settings: {
		time: {
			'pomodoro': number,
			'long': number,
			'short': number,
		}
	},
	start: boolean
}

export enum ActionTypes {
	setTime = 'set_time',
	setMode = 'set_mode',
	start = 'timer_start',
	stop = 'timer_stop',
	skip = 'timer_skip',
	tickdown = 'tickdown',
	userTime = 'set_user_time'
}

export type Action = {
	type: ActionTypes,
	time?: number,
	mode?: string
}

export interface ChallengeTypes {
	type: 'body' | 'eye';
	description: string;
}

export interface ModalPropsTypes {
	children: ReactNode,
	modalTitle: string
}

export interface ModalContextDataTypes {
	isShowing: boolean,
	closeModal: () => void,
	openModal: () => void,
}

export interface ModalProviderPropsTypes {
	children: ReactNode
}

export interface TaskContextDataTypes {
	tasks: ITask[]
	isFilterActive: boolean,
	filteredStatus: 0|1,
	seeAll: () => void,
	seeDone: () => void,
	seeNotDone: () => void,
	toggleCompleteTask: (event: SyntheticEvent<HTMLElement>) => Promise<void>,
	createTask: (event:  FormEvent<HTMLFormElement>) => Promise<void>,
	deleteTask: (event: SyntheticEvent<HTMLButtonElement>) => Promise<void>,
	bulkDelete: () => Promise<void>,
	updateDbOrder: (items?: ITask[]) => Promise<void>,
}

export interface TaskProviderPropsTypes {
	children: ReactNode
}

export interface TimerProviderPropTypes {
	children: ReactNode
}

export interface TimerContextDataTypes {
	time: number;
    initialTime: number;
    mode: string;
    settings: {
        time: {
            'pomodoro': number;
            'long': number;
            'short': number;
        };
    };
    start: boolean;
}

export interface TimerDispatchContextDataTypes {
	handleModeChange: (item: object) => void,
	convertTime: (arg: number) => string,
	waveHeight: number,
	dispatch: Dispatch<any>
}

export interface TimeOptionTypes {
	id?: number;
	mode: string;
	valueName?: string;
	value: string | number;
}