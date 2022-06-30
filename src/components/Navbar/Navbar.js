import React from 'react';
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
        <form>
            <div className="search">
                <input name="search-in" type="text" placeholder="Search"></input>
            </div>
        </form>
        <div>
            <Link className="logo-lup" to=""><SearchIcon/></Link>
        </div>
        
        <ul>
            <li>
            <a href='/'><HomeIcon/></a>
            </li>
            <li>
            <a href='/'>Products</a>
            </li>
            <li>
            <a href='/'><ShoppingCartIcon/></a>
            </li>
            <li>
            <a href='/'><PersonOutlineIcon/></a>
            </li>
        </ul>
    </div>
)
}
