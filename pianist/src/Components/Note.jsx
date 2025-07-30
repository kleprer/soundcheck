import React from 'react'

const Note = ({keynote}) => {
  return (
    <div className={`keynote keynote-${keynote}`}>
    </div>
  )
}

export default Note