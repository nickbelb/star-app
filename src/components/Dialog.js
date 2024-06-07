import React, { useState,useEffect} from 'react'

function Dialog({open}){ 
  const [IsOpen,setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

 return (
    <div open className={`dialog-box flex-center ${IsOpen ? 'visible':'hidden'}`}>
      <p>Press the button to close?</p>
      <button className="close-btn" onClick={()=>{setIsOpen(false)}} >Close</button>
    </div>
  )
}

export default Dialog;

