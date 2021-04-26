import React from 'react';
import { useSelector } from 'react-redux';

export const List = () => {
  const items = useSelector(state => state.items)
  return (
    <ul className='list'>
      {items.map((item, idx) => (
        <li key={idx} className='list-item'>{item}</li>
      ))}
    </ul>
  );
};
