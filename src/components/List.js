import React from 'react';

export const List = ({items}) => {
  return (
    <ul className='list'>
      {items.map((item, idx) => (
        <li key={idx} className='list-item'>{item}</li>
      ))}
    </ul>
  );
};
