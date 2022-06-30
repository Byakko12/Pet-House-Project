import React from 'react';
export default function Login() {
    return (
        <div className="user-container">
            <div className="login">
                <h1 className="login-title">Wellcome PetUser</h1>
                <form className='form-login'>
                    
                    <input type="text" className="login-control" placeholder="User"></input>
                    <input type="text" className="login-control" placeholder="Password"></input>
                    <button className = "btn-login">
                            Login
                    </button>
                </form>
            </div>
        </div>
        
    )
}