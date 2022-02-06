import React from "react";
import DeathLogo from './DeathLogo'
const Header = () => {
  return <>
<header className="header">
  <div className="headerContainer">
  <DeathLogo />
      <div className="headerText">
  <h1>Welcome to DCaaS!</h1>
  <p>
     DM touched your dice? Haven't succeded a saving throw since third edition?
     Can't hit the broad side of a barn with your barn door specialized Fighter?
     Just unlucky, you keep thinking to yourself... 
     Think again! You need our unpatentable and obviously legit Dice Cleansing as a Service! 
  </p>
  </div>
  
          </div>

</header>
  </>
  
};

export default Header;
