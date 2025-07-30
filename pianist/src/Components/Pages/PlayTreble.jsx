import React from 'react'
import Piano from '../Piano'
import Task from '../Task'
import treble from '../../../src/treblelines.svg';

const PlayTreble = () => {
  let keynotes = ['A5']
  return (
    <div >
      <Task clef={treble} melody={keynotes}/>
      <Piano melody={keynotes}/>
    </div>
  )
}

export default PlayTreble