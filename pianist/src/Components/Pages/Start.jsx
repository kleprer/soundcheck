import React from 'react'
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className="App">
      <div className="choice">
        <Link to="/treble" className="option">
            <p>
            Скрипичный
            </p>
        </Link>
        <Link to="/bass" className="option">
            <p>
                Басовый
            </p>
        </Link>
      </div>
    </div>
  )
}

export default Start