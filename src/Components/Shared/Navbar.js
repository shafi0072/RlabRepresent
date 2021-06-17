import React, { useContext } from 'react';
import { userContext } from '../../App';
import './Navbar.css'
const Navbar = (props) => {
    const [user, setUser] = useContext(userContext);
    const handleHomeClick = () => {
        const newClick = {...user}
        newClick.userHome = true;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = false;
        setUser(newClick);
    }
    const handleUserClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = true;
        newClick.devices = false;
        newClick.locations = false;
        setUser(newClick);
    };
    const handleDeviceClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = true;
        newClick.locations = false;
        setUser(newClick);
    }
    const handleLocationClick = () => {
        const newClick = {...user}
        newClick.userHome = false;
        newClick.user = false;
        newClick.devices = false;
        newClick.locations = true;
        setUser(newClick);
    }
    return (
        <div className='navBackground d-flex justify-content-center pt-5'>
            <ul style={{listStyle:'none'}}>
                <li className='mb-4' onClick={handleHomeClick}><h5>User Home</h5></li>
                <li className='mb-4' onClick={handleUserClick}><h5>User</h5></li>
                <li className='mb-4' onClick={handleDeviceClick}><h5>Devices</h5></li>
                <li className='mb-4' onClick={handleLocationClick}><h5>Locations</h5></li>
            </ul>
        </div>
    );
};

export default Navbar;