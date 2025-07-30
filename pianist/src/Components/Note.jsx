import React from 'react'

const Note = ({keynote}) => {
  return (
    <div className={`keynote keynote-${keynote}`}>
        <p className='guessed'>{keynote}</p>
    </div>
  )
}

export default Note