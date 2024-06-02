import './login.css'
import React from 'react'

export default function Login() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">Social App</h3>
                <span className="logindesc">
                    Connect with friends and the world around you on Social App.
                </span>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input type="email" placeholder="email" className='logininput'/>
                    <input type="password" placeholder='password' className='logininput' />
                    <button className="loginbutton">Log in</button>
                    <span className="loginforgot">Forgot Password?</span>
                    <button className="loginregisterbutton">
                        Create a New Account
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
