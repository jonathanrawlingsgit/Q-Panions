import React from 'react';
import Logo from './Logo';
import CreateUser from './Users/UserCreate';
import Registration from './auth/Registration';




const Header = ({createUser, activeUser}) => (
  <header>
    <div className="fl">
     
      
        <img src="/images/misc/user.png" alt="User Settings" />
        {activeUser ? null :  <Registration createUser={createUser} /> }
        
    
    </div>

    <div className="fl">
      <Logo />
     
    </div>

    <div className="fl">
      <button type="button">
        <img src="/images/misc/messages.png" alt="View Messages" />
      </button>
    </div>
  </header>
);

export default Header;