import React from 'react'

export const Toggle = () => {
  const handleToggle = () => {
    window.alert('toggle')
  }

  return (
    <button onClick={handleToggle} className='toggle-btn'>
      Toggle
    </button>
  )
}
