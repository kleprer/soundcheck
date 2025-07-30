import React from 'react'
import Note from './Note'

const Task = ({clef}) => {

    let keynotes = ['C4', 'E5', 'G4']

  return (
    <div className="playtask">
        <img src={clef} alt='lines' width='350px' height='auto'/>
        <div className="melody">
            {keynotes.map(function(kn, i){
                return <Note keynote={kn} key={i} />;
            })}
        </div>
        
    </div>
  )
}

export default Task