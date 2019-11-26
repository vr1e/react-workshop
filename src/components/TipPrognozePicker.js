import React from 'react';

const TipPrognoze = () => {
	return (
		<>
			<div className='form-check form-check-inline mt-2'>
				<input
					className='form-check-input'
					type='radio'
					id='trenutnoVreme'
					value='trenutnoVreme'
				/>
				<label className='form-check-label' htmlFor='trenutnoVreme'>
					Trenutno vreme
				</label>
			</div>
			<div className='form-check form-check-inline mt-2'>
				<input
					className='form-check-input'
					type='radio'
					id='prognoza'
					value='prognoza'
				/>
				<label className='form-check-label' htmlFor='prognoza'>
					Prognoza (5 dana/ 3 sata)
				</label>
			</div>
		</>
	);
};

export default TipPrognoze;
