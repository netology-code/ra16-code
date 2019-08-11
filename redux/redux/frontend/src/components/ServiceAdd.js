import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService} from '../actions/actionCreators';

function ServiceAdd() {
	const item = useSelector(state => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = event => {
		const {name, value} = event.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = event => {
			event.preventDefault();
			dispatch(addService(item.name, item.price));
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} value={item.price} />
			<button type='submit'>Save</button>
		</form>
	);
}

export default ServiceAdd;
