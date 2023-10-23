import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <nav>
            <div className='logo'>
                Dictionary
            </div>
            <div className='linkBox'>
                    <Link to='/'>Home</Link>
                     <Link to='/history'>History</Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar