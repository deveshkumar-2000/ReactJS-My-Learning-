import React from 'react';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="body-wrapper">
      <nav className="menu">
        <ul>
          <li>
            <Link className='link' to='/'> Home </Link>
          </li>
          <li>
            <Link className='link' to='/about'> About </Link>
          </li>
          <li>
            <Link className='link' to='/contact'> Contact </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Layout;
