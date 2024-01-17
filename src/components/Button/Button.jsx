import React from 'react'

function Button({onClick}) {
  return (
    <div>
        <button onClick={onClick} type='button'>Load More</button>
    </div>
  )
}

export default Button