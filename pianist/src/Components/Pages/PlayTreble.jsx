import React from 'react'
import Piano from '../Piano'
import Task from '../Task'
import treble from '../../../src/treblelines.svg';

const PlayTreble = () => {
  let allNotes = ['C4', 'D4', 'E4', 'F4','G4', 'A4','B4', 'C5', 'D5', 'E5', 'F5','G5', 'A5']
  const shuffled = allNotes.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 3);
  let keynotes = selected;
  return (
    <div >
      <Task clef={treble} melody={keynotes}/>
      <Piano melody={keynotes}/>
    </div>
  )
}

export default PlayTreble