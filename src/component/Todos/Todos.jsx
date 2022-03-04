import React from 'react'

export default function Todos(props) {
  return (
    <div className='tasks-container mt-4'>
      <h3>Your Tasks</h3>
      { props.children}
    </div>
  )
}
