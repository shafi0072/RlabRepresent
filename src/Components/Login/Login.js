import React, { useState } from 'react';
import './Login.css';
import logo from '../../Resorces/logo_RLAB.png'
const Login = () => {
    const [click, setClick] = useState({
        login: true,
        signUp: false
    })
    const handleSignUp = () => {
        const newClick = {...click}
        newClick.login = false;
        newClick.signUp  = true;
        setClick(newClick)
    }
    const handleLogin = () => {
        const newClick = {...click}
        newClick.login = true;
        newClick.signUp  = false;
        setClick(newClick)
    }
    return (
        <div className='background d-flex justify-content-center p-5'>

            {click.login && <div className="loginBox">
                <div className="text-center">
                    <img
                        src={logo}
                        alt=""
                        style={{
                            width: '30%'
                        }}/>
                </div>
                <div className="loginText mt-5 text-center">
                    <h2
                        style={{
                            fontFamily: "'Raleway', sans-serif"
                        }}>Log In</h2>
                </div>

                <div className="">
                    <div class="mb-3 row">

                        <div class="col-sm-10 input-box">
                            <input
                                type="text"
                                class="form-control"
                                id="staticEmail"
                                placeholder="User email"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-sm-10 input-box">
                            <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="Password"/>
                        </div>
                    </div>
                </div>

                <div className="remember">
                    <input className="rememberCheckbox" type="checkbox"/>
                    <label htmlFor="">Remember Me</label>
                </div>
                <div className="forgotPass">
                    <a href="#" className="forgotTxt">Forgot Password</a>
                </div>
                <div>
                    <button className="form-control bg-primary text-light">Log In</button>
                </div>
                <div className="creatTxt">
                    <p>Don't have an account?<span onClick={handleSignUp} className="creatAccount">Create an account</span>
                    </p>
                </div>
            </div>}

            {click.signUp && <div className="loginBox signup">
                <div className="text-center">
                    <img
                        src={logo}
                        alt=""
                        style={{
                            width: '30%'
                        }}/>
                </div>
                <div className="loginText mt-5 text-center">
                    <h2
                        style={{
                            fontFamily: "'Raleway', sans-serif"
                        }}>Sign Up</h2>
                </div>

                <div className="">
                    <div class="mb-3 row">

                        <div class="col-sm-10 input-box">
                            <input
                                type="text"
                                class="form-control"
                                id="staticEmail"
                                placeholder="First Name"
                                name="frstNae"/>
                        </div>
                    </div>
                    <div class="mb-3 row">

                        <div class="col-sm-10 input-box">
                            <input
                                type="text"
                                class="form-control"
                                id="staticEmail"
                                placeholder="Last Name"
                                name="frstNae"/>
                        </div>
                    </div>
                    <div class="mb-3 row">

                        <div class="col-sm-10 input-box">
                            <input
                                type="email"
                                class="form-control"
                                id="staticEmail"
                                placeholder="Email "
                                name="frstNae"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-sm-10 input-box">
                            <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="Password"/>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <div class="col-sm-10 input-box">
                            <input
                                type="password"
                                class="form-control"
                                id="inputPassword"
                                placeholder="Confirm Password"/>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="form-control bg-primary text-light">Log In</button>
                </div>
                <div className="creatTxt">
                    <p>Already have an account?<span onClick={handleLogin} className="creatAccount">Log In</span>
                    </p>
                </div>
            </div>}
        </div>
    );
};

export default Login;