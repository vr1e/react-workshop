import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleTipPrognoze } from '../store/actions/prognozaActions';

const TipPrognoze = () => {
	const { tipPrognoze } = useSelector(store => store.prognozaReducer);
	const dispatch = useDispatch();

	return (
		<>
			<div className='form-check form-check-inline mt-2'>
				<input
					className='form-check-input'
					type='radio'
					id='weather'
					checked={tipPrognoze === 'weather'}
					onChange={() => dispatch(handleTipPrognoze('weather'))}
				/>
				<label className='form-check-label' htmlFor='weather'>
					Trenutno vreme
				</label>
			</div>
			<div className='form-check form-check-inline mt-2'>
				<label className='form-check-label' htmlFor='forecast'>
					<input
						className='form-check-input'
						type='radio'
						id='forecast'
						checked={tipPrognoze === 'forecast'}
						onChange={() => dispatch(handleTipPrognoze('forecast'))}
					/>
					Prognoza (5 dana/ 3 sata)
				</label>
			</div>
		</>
	);
};

export default React.memo(TipPrognoze);
