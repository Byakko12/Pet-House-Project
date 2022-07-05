import React from 'react';
import Navbar from '../Navbar/Navbar'
import Login from '../Login/Login';
import Register from '../Register/Register'
const LoginRegister = () => {
    return(
            <main className="login-register">
                <Navbar/>
                <Login/>
                <Register/>
            </main>

    )
}
export default LoginRegister;