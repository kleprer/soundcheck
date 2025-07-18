import React from 'react'
import { Link } from 'react-router-dom';

const TwoOption = ({link1, link2, text1, text2}) => {
  return (
    <div>
        <div className="choice">
        <Link to={link1} className="option">
            <p>
            {text1}
            </p>
        </Link>
        <Link to={link2} className="option">
            <p>
                {text2}
            </p>
        </Link>
      </div>
    </div>
  )
}

export default TwoOption