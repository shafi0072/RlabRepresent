import React from 'react';
import Navbar from '../../Shared/Navbar';
import './UserHome.css'
import User from '../User/User'
import logo from '../../../Resorces/logo_RLAB.png'
const UserHome = () => {
    return (
        <div className='row'>
            
            <div className="col-md-3" style={{margin:'0', padding:'0'}}>
                <Navbar/>
            </div>
            <div className="col-md-9 backgroundSIDE text-center">
            <img src={logo} alt="" style={{width:'20%'}} className='mt-5' />
                <User/>
            </div>
        </div>
    );
};

export default UserHome;