import React, { useRef, useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/cinehouse (1).png';




const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    },
    {
        display: 'Login',
        path: '/login'
    },
    {
        display: '',
        path: ''
    }
    
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const [lang, setLang] = useState(localStorage.getItem('lang'));
    const active = headerNav.findIndex(e => e.path === pathname);

    const handleChange = (e) => {
        console.log(e.target.value);
        localStorage.setItem('lang', e.target.value);
        setLang(e.target.value);
        window.location.reload(false)
      };
      
      
      var mail = sessionStorage.getItem('mail');
      if(mail != 0)
      {
        headerNav[3] = ""
      }
      
      
    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
        
    }, []);

    return (
        <div  ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>
              
                    <span><b>{mail}</b></span>
                
                <select  value ={lang} onChange={handleChange}>
                  <option value="en-US">EN</option>
                    <option value="fr-FR" >FR</option>
                </select>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;
