import React from 'react';
export default function Register() {
    return (
        
            <div className="register-container">
                <h1 className="login-title">Hello PetHouseUser</h1>
                <form>
                    
                    <input type="text" className="register-control" placeholder="Name"></input>
                    <input type="text" className="register-control" placeholder="LasteName"></input>
                    <input type="text" className="register-control" placeholder="Address"></input>
                    <input type="text" className="register-control" placeholder="Phone"></input>
                    <input type="text" className="register-control" placeholder="E-mail"></input>
                    <input type="text" className="register-control" placeholder="User"></input>
                    <input type="text" className="register-control" placeholder="Password"></input>
                    <input type="text" className="register-control" placeholder="Confirm your password"></input>
                    <button className = "btn-register">
                            Register
                    </button>
                    <a href="/">Forgout your password?</a>
                </form>
            </div>
    )
}