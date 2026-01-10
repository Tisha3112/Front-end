import React, { useState } from 'react'

function clickbutton() {
    const[text,setText]=useState("not clicked");

    const handleclick=() =>{
        setText("Clicked!");
    };
  return (
    <div><p>
        {
            text
        }</p>

        <button onClick={handleclick}>click me</button>
        </div>
  );
}

export default clickbutton