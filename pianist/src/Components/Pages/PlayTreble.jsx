import React from 'react'
import Piano from '../Piano'
import Task from '../Task'
import treble from '../../../src/treblelines.svg';

const PlayTreble = () => {
  return (
    <div >
      
      <Task clef={treble}/>
      
      <Piano />
    </div>
  )
}

export default PlayTreble