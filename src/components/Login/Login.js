import React from 'react'; //{useState}
import userImage from "../Routes/undraw_male_avatar_323b.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
// import Title  from "./Title/Title";
// import Label from "./Label/Label";
import './login.css'
// import Input from "./Input/Input";
export default function Login() {
    
    // const [user, setUser] = useState('');
    
    // function handleChange(name, value){
    //     if(name === 'user'){
    //         setUser(value)
    //     }
    // }

    return (
        <div className="row">
            <form className="form-login-one" method="POST" action="">
                <img className="img-user-login" src={userImage} alt=""/>
                <h1 className="title-l">¡Hello FriendPets!</h1>
                <div className="form-group">
                    <input  className="form-control" type="email" name="email" id="" Placeholder="User"/>
                </div>
                <div className="form-group">
                    <input class="form-control" type="text" name="pass" id="" Placeholder="Password"/>
                </div>
                <div className="btn-centrado">
                    <button type="submit" class="btn-form">Sign In</button>
                    <a className="btn-form " href="/"><GoogleIcon/>Enter with Google</a>
                    <a className="btn-form " href="/"><FacebookIcon/>Enter with Facebook</a>
                    <a href="/" className="forgot-pass">Forgot your password?</a>
                </div>
            </form>
        </div>
        
        
    )
}