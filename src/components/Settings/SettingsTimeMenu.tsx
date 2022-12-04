import { ChangeEvent } from 'react';
import { useTimer } from '../../contexts/TimerContext';
import { initialState } from '../../contexts/TimerReducer';

export default function TimeInputs() {
	const state = useTimer()

	const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
		const item: [string, number] = [e.target.name, e.target.valueAsNumber]
		state.settings.time[item[0]] = item[1]

		item[0] === state.mode ? state.time = item[1] * 60 : null
	}

  return (
    <form role={"form"} className='space-y-4 pb-6 flex flex-col'>
      {Object.entries(initialState.settings.time).map((item, index) => {
		return (
			<div key={index}>
			<label
			htmlFor={`timer-duration-${item[0]}`}
			className={"label"}
			>
      		{item[0].charAt(0).toLocaleUpperCase() + item[0].slice(1)}
			</label>
			<input
			type='number'
			name={item[0]}
			pattern='[0-9]{2}'
			max={"60"}
			min={"1"}
			id={`timer-duration-${item[0]}`}
			defaultValue={item[1]}
			onChange={(e) => handleUserInput(e)}
			className='w-36 input input-bordered'
		/>
	  </div>
		)
	})}
    </form>
  );
}