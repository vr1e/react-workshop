import React, { useState } from 'react';

const InputPolje = () => {
	const [lokacija, setLokacija] = useState('');
	return (
		<div className='form-label-group'>
			<input
				type='text'
				className='form-control'
				placeholder='Lokacija'
				required=''
				autoFocus=''
				value={lokacija}
				onChange={e => setLokacija(e.currentTarget.value)}
			/>
		</div>
	);
};

export default InputPolje;
