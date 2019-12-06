import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { darkModeToggle } from '../store/actions/layoutActions';

const DarkSwitch = () => {
	const { darkMode } = useSelector(store => store.layoutReducer);
	const dispatch = useDispatch();

	return (
		<div className='custom-control custom-switch'>
			<input
				type='checkbox'
				className='custom-control-input'
				id='darkMode'
				value={darkMode}
				onChange={() => dispatch(darkModeToggle())}
			/>
			<label className='custom-control-label' htmlFor='darkMode'>
				<small>Dark mode</small>
			</label>
		</div>
	);
};

export default DarkSwitch;
