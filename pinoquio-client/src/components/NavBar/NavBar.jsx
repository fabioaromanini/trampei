import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => (
    <div className="NavBar">
        <div className="NavBar_Logo">
            <Link to="/">#trampei</Link>
        </div>
        <div className="NavBar_menu">
            <Link to="/contato">Contato</Link>
            <Link to="/quemsomos">Quem somos</Link>
            <Link to="/login">Log in</Link>
            <Link to="/trampos">Trampos</Link>
        </div>
    </div>
);

export default NavBar;