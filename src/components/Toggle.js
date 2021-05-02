import React from 'react'

export const Toggle = ({onClick, totalItems}) => {
  return (
    <button onClick={onClick} className='toggle-btn'>
      Toggle ({totalItems})
    </button>
  )
}
