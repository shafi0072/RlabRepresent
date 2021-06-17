import React from 'react';
import './Navbar.css'
const Navbar = (props) => {
    
    
    return (
        <div className='navBackground d-flex justify-content-center pt-5'>
            <ul style={{listStyle:'none'}}>
                <li className='mb-4' onClick={handleHomeClick}><h5>User Home</h5></li>
                <li className='mb-4'><h5>User</h5></li>
                <li className='mb-4'><h5>Devices</h5></li>
                <li className='mb-4'><h5>Locations</h5></li>
            </ul>
        </div>
    );
};

export default Navbar;