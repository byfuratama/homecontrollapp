import React, { useState } from 'react';

const BayuPratama = () => {

  const [ isOn, setIsOn] = useState(false);

  const divStyle = { 
    display: isOn ? "block" : "none"
  };

  function toggle() {
    setIsOn(!isOn)
  }

  return (<div>
    Byfura : <button onClick={toggle}>Press Me</button>
    <div style={divStyle}>
      Nama: Bayu Pratama <br/>
      FB: fb.me/byfura <br/><br/>
      <h1> CONGRATS YOU'RE GAY </h1>
    </div>
  </div>)

}

export default BayuPratama;