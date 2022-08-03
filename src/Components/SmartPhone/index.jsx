import React, { useState } from "react";
import './style.css';
import lens from '../../Images/lens-camera.png';
import LogoCalc from '../../Images/logo-calc.jpg';
import Calculadora from '../Calculadora';
import Clock from "../Relogio";

function SmartPhone() {
  const [calculator, setCalculator] = useState(false);

  function openCalculator() {
    if (calculator == false) {
      setCalculator(true);
    } else {
      setCalculator(false);
    }
  }

  return (
    <section className="smartPhone">
      <article className="screen">
        <div className="camera">
          <img src={lens} alt="Lente da câmera" title="Lente da câmera" />
        </div>

        {calculator == false ?
          <div className='on'>
            <Clock />
          </div> :
          <div className='off'>
            <Clock />
          </div>}

        {calculator == false ?
          <div className='off'><Calculadora /></div> : <div className='on'><Calculadora /></div>}

        <a to='' onClick={openCalculator}>
          {calculator == false ?
            <img className="calcLogo" src={LogoCalc} alt="Caluladora" title="Caluladora" /> :
            <span className="smartPhoneIcons iconCalcOn">◁ ◉ ▢</span>}
        </a>

        {calculator == false ?
          <div className='on'>
            <span className="smartPhoneIcons">◁ ◉ ▢</span>
          </div> :
          <div className='off'>
            <span>◁ ◉ ▢</span>
          </div>}
      </article>
    </section>
  );
}

export default SmartPhone;
