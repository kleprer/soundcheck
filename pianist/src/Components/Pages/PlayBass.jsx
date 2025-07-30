import React from 'react'
import bass from '../../../src/basslines.svg'
import Task from '../Task'
import Piano from '../Piano'
const PlayBass = () => {
  return (
    <div>
      <Task clef={bass}/>
      <Piano />
    </div>
  )
}

export default PlayBass