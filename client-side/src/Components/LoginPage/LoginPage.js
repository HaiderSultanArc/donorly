import React, { useState } from 'react';
import { IconButton, InputAdornment, TextField, Button } from '@material-ui/core';
import { LockRounded, AccountCircleRounded, Visibility, VisibilityOff } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const handleUsername = (e) => {
        console.log(e.target.value)
        setUsername(e.target.value)

    }

    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }

    const handleVisibilty = () => {
        setShowPassword(!showPassword)
    }

    const handleLoginForm = (e) => {
        e.preventDefault()
    }

    return (
        <div className='loginPage'>

            <div className='loginForm-container'>

                <form className='loginForm' onSubmit={handleLoginForm}>
                    <AccountCircleRounded style={{ fontSize: 60 }} />

                    <div className='username-container'>
                        <TextField className='username' label="Username" variant="outlined" value={username} onChange={handleUsername}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">
                                    <AccountCircleRounded />
                                </InputAdornment>
                            }} />
                    </div>

                    <div className='password-container'>
                        <TextField className='password' label="Password" type={showPassword ? 'text' : 'password'} variant="outlined" value={password} onChange={handlePassword}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <IconButton className='iconbtn' onClick={handleVisibilty}>
                                        {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>,
                                startAdornment: <InputAdornment position="start">
                                    <LockRounded />
                                </InputAdornment>
                            }}
                        />
                    </div>

                    <div className='forgot-pwd-container'>
                        <Link className='forgot-pwd' to='#'>Forgot Password?</Link>
                    </div>

                    <div className='login-btn-container'>
                        <Button variant='contained' color="primary" className="login-btn" type='submit'>Login</Button>
                    </div>

                    <div className='link-to-register-container'>
                        Don't have account?
                        <Link className='link-to-register' to='/register'>Register</Link>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default LoginPage