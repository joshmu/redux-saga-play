import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggle } from '../redux/actions'

export const Toggle = () => {
  const items = useSelector(state => state.items)
  const showing = useSelector(state => state.showHide)
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(toggle(!showing))} className='toggle-btn'>
      Toggle ({items.length})
    </button>
  )
}
