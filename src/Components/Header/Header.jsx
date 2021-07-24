import React from 'react';
import {Link} from "react-router-dom";

const Header = ({title, buttonText, buttonHref}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-wrapper">
                    <span className="page__title">{title}</span>
                    <nav className="nav">
                        <Link to={buttonHref} className="nav__btn">{buttonText}</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;