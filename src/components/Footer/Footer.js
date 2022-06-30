import React from 'react'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
    return (
        <footer>
            <div className="container-footer">
                <h1 className="footer-title">PetHouse</h1>
                <div className="social-container">
                    <a href="/" className="social-icon"><FacebookIcon/></a>
                    <a href="/" className="social-icon"><YouTubeIcon/></a>
                    <a href="/" className="social-icon"><InstagramIcon/></a>
                    <a href="/" className="social-icon"><TwitterIcon/></a>
                </div>
                <ul className="menu-container">
                    <li className="menu-item">Home</li>
                    <li className="menu-item">Products</li>
                    <li className="menu-item">Cart</li>
                    <li className="menu-item">User</li>
                    <li className="menu-item">Legal</li>
                </ul>
            </div>
        </footer>
    )
}