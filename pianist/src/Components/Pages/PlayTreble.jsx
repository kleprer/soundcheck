import React from 'react'
import Piano from '../Piano'
import Task from '../Task'
import treble from '../../../src/treblelines.svg';
import Note from '../Note';

const PlayTreble = () => {
  return (
    <div >
      <Note keynote={'D1S'}/>
      <Task clef={treble}/>
      
      <Piano />
    </div>
  )
}

export default PlayTreble