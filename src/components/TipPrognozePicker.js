import React from 'react';

const TipPrognoze = ({ tipPrognoze, handleTipPrognoze }) => {
	return (
		<>
			<div className='form-check form-check-inline mt-2'>
				<input
					className='form-check-input'
					type='radio'
					id='weather'
					checked={tipPrognoze === 'weather'}
					onChange={handleTipPrognoze}
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
						onChange={handleTipPrognoze}
					/>
					Prognoza (5 dana/ 3 sata)
				</label>
			</div>
		</>
	);
};

export default React.memo(TipPrognoze);
