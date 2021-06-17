import React from 'react';
import './user.css'
const UserForm = () => {
    return (
        <div style={{width:'50%'}}>
            <form action="">
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="userEmail"><h5>email</h5></label>
                    <input type="email" id='userEmail' className='form-control' placeholder='Enter Your Email'/>
                </div>
                <div className='d-flex justiy-content-around mb-4' >
                    <label htmlFor="Role"><h5>Role</h5></label>
                    <select name="role" id="role" className='form-control'>
                        <option value="admin">Admin</option>
                        <option value="oparetors">Oparetors</option>
                        <option value="viewers">Viewers</option>
                    </select>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="name"><h5>Name</h5></label>
                    <input type="text" id='name' placeholder='Enter Your Name' className='form-control'/>
                </div>
                <div className='d-flex justiy-content-around mb-4'>
                    <label htmlFor="position"><h5>Position</h5></label>
                    <input type="text" id='position' placeholder='Enter Your position' className='form-control'/>
                </div>
                <button className="btn btn-primary">Create/Save</button>
            </form>
        </div>
    );
};

export default UserForm;