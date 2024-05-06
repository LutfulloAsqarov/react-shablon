import React from "react";
import "./header.scss";
import { headerItems } from "../../static/productsData";

const Header = () => {
    return (
        <header>
            <nav className="navbar container">
                <div className="nav__logo">
                    <a href="" className="header__logo">
                        <span>Logo</span>
                    </a>
                </div>
                <ul className="header__list">
                    {headerItems.map((item, indx) => (
                        <li className="header__item" key={indx}>
                            <a href="">{item}</a>
                        </li>
                    ))}
                </ul>
                <div className="header__btns">
                    <button>Sign in</button>
                    <button>Sign up</button>
                </div>
            </nav>
        </header>
    );
};

export default Header;
