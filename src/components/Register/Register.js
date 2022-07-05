import React from 'react';
import  './Register.css';
export default function Register() {
    return (
        
        <div class="row">

            <form className="form-login-one" method="POST" action="">
            <h1  class="title-l">Create your User</h1>
                <div class="form-group">
                <input  class="form-control"  type="text" name="" id="" Placeholder="Name"/>
                </div>
                <div class="form-group">
                <input class="form-control"  type="text" name="" id="" Placeholder="LastName"/>
                </div>
                <div class="form-group">
                <input class="form-control"  type="text" name="" id="" Placeholder="Phone"/>
                </div>
                <div class="form-group">
                <input class="form-control"  type="text" name="address" id="" Placeholder="Address"/>
                </div>
                <div class="form-group">
                <input class="form-control"  type="text" name="" id="" Placeholder=""/>
                </div>
                <div class="form-group">
                <input  class="form-control" type="email" name="" id="" Placeholder="E-mail"/>
                </div>
                <div clasNames="form-group">
                <input className="form-control"  type="password" name="contrasenya" id="" Placeholder="Password"/>
                </div>  
                <div className="form-group">
                <input className="form-control"  type="password" name="contrasenya-confirm" id="" Placeholder="Confirm your password"/>
                </div>
                <div className="btn-centrado">
                <button type="submit" class="btn-form">Create User</button>
                <a className="btn-form " href="/"><i className="fab fa-google-plus"></i>Enter with Google</a>
            <a className="btn-form " href="/"><i className="fab fa-facebook"></i>Enter with Facebook</a>
                </div>
            </form>
</div>
    )
}