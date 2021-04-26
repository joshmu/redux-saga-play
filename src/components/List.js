import React from 'react';

export const List = () => {
  const items = ['one', 'two', 'three'];
  return (
    <ul className='list'>
      {items.map((item, idx) => (
        <li key={idx} className='list-item'>{item}</li>
      ))}
    </ul>
  );
};
