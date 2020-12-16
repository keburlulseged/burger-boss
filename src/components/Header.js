import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="headerLogo"
          src="https://www.burgerboss.com/wp-content/uploads/2017/07/burger-boss-logo1.png"
          alt="burgerBossLogo"
        />
      </Link>

      <div className="headerNav">
          <div className="headerOption">
            <span>LOCATIONS</span>
          </div>
          <div className="headerOption">
            <span>ABOUT US</span>
          </div>
          <div className="headerOption">
            <span>MENU</span>
          </div>
          <div className="headerOption">
            <span>BOSS NEWS</span>
          </div>
          <div className="headerOption">
            <span>FUNDRAISING</span>
          </div>
          <div className="headerOption">
            <span>FRANCHISING</span>
          </div>
          <div className="headerOption">
            <span>CATERING</span>
          </div>
          <div className="greenButton">
            <span>ORDER ONLINE</span>
          </div>
      </div>


    </div>
  )
}

export default Header;
