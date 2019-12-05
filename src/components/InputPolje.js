import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleInputChange } from '../store/actions/prognozaActions';

const InputPolje = () => {
	const { grad } = useSelector(store => store.prognozaReducer);
	const dispatch = useDispatch();

	return (
		<div className='form-label-group'>
			<input
				type='text'
				className='form-control'
				placeholder='Lokacija'
				required=''
				autoFocus=''
				value={grad}
				onChange={e => dispatch(handleInputChange(e.currentTarget.value))}
			/>
		</div>
	);
};

export default InputPolje;
