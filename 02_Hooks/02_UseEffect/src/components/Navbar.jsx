import React, { useEffect } from 'react';

const Navbar = (props) => {
  
  useEffect((props) => {
    alert('Color was changed')
  
    
  }, [props.color])
  

  return (
    <div>
      <p>I am navbar</p>
    </div>
  );
}

export default Navbar;

