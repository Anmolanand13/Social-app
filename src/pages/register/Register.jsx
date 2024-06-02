import './register.css'
import React from 'react'

export default function Register() {
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
                <input type="text" placeholder='username' className='logininput' />
                    <input type="password" placeholder='password' className='logininput' />
                    <input type="password" placeholder='re write password' className='logininput' />
                    <input type="email" placeholder="email" className='logininput'/>
                    <button className="loginbutton">Sign Up</button>
                    <span className="loginforgot">Forgot Password?</span>
                    <button className="loginregisterbutton">
                       Already on social?
                    </button>
                </div>
            </div>
        </div>

    </div>
  )
}
