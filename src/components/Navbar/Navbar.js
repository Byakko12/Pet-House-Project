import React from 'react';
import "./navbar.css"
import {Link} from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
export default function Navbar() {
return (
    <div className="navbar">
        <a href="/" className="home-title">
        <a href="/"><PetsIcon/></a>
            PetHouse
        </a>
        <form className="form-search">
            <div className="search">
                <input name="search-in" type="text" placeholder="Search"></input>
            </div>
        </form>
        <div className="div-logo">
            <Link className="logo-lup" to=""><SearchIcon/></Link>
        </div>
        
        <ul>
            <li>
            <a href='/home'><HomeIcon/></a>
            </li>
            <li>
            <a href='/products'>Products</a>
            </li>
            <li>
            <a href='/cart_shopping'><ShoppingCartIcon/></a>
            </li>
            <li>
            <a href='/sign_in'><PersonOutlineIcon/></a>
            </li>
        </ul>
    </div>
)
}
