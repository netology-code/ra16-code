import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeService} from '../actions/actionCreators';

function ServiceList() {
  const items = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeService(id));
  }

  return (
    <ul>
      {items.map(({id, name, price}) => (
        <li key={id}>
          {`${name} ${price}`}
          <button onClick={() => handleRemove(id)}>✕</button>
        </li>
      ))}
    </ul>
  )
}

export default ServiceList
