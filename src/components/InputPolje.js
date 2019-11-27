import React from 'react';

const InputPolje = ({ grad, handleInputChange }) => {
	return (
		<div className='form-label-group'>
			<input
				type='text'
				className='form-control'
				placeholder='Lokacija'
				required=''
				autoFocus=''
				value={grad}
				onChange={handleInputChange}
			/>
		</div>
	);
};

export default React.memo(InputPolje);
