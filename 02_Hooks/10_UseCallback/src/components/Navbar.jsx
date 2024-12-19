import React, { memo, useState } from 'react'

const Navbar = ({ adjective, getAdjective }) => {
  const [click, setclick] = useState(false)
  console.log("navbar re-rendered")
  return (
    <div>
      I am navbar {adjective}
      <button onClick={() => {
        if(click === true){
          getAdjective()
        }
        setclick(!click)
      }}>click me</button>
    </div>
  )
}

export default memo(Navbar)
