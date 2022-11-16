import React, { useRef } from 'react';
import './footer.scss';
import { Link, useLocation } from 'react-router-dom';
import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/cinehouse (1).png';

var mail = sessionStorage.getItem('mail');
      

const Footer = () => {
    function redirectToAdmin(){
                        <Link to="/">Term of services</Link>
        window.location='dashboard.html';
    }

    function refreshPage() {
        window.location.reload(false);
        sessionStorage.setItem("mail","");
      }
    return (
    <div   className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">CinéHouse</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Term of services</Link>
                        <a href='.././pages/Admin/dashboard.html'>DashBoard Admin</a>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">FAQ</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/movie">You must watch</Link>
                        <Link to="/movie/634649">Recent release</Link>
                        <Link to="/tv">Tv Series</Link>
                        <Link to="/login" onClick={refreshPage}>Logout</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
