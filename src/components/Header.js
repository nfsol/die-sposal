import React from "react";
import DeathLogo from './DeathLogo'
import D20 from "./D20";
const Header = () => {
  return <>
<header className="header">
  
  
  <div className="headerContainer">
  <DeathLogo />
      <div id='info' className="headerText">
      <span className="headerLogo">Die<D20 className='d20Header'/> Sposal</span>
  <h1>The Worlds First Free DCaaS</h1>
  <p>
     DM touched your dice? Haven't succeded a saving throw since third edition?
     Can't hit the broad side of a barn with your barn door specialized Fighter?
     Just unlucky, you keep thinking...<br/> <br/>
     Think again! You need our unpatentable and obviously legitimate Dice Cleansing as a Service! 
  </p>
  </div>
  
          </div>

</header>
  </>
  
};

export default Header;
