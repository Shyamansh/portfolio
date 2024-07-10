import React from "react";

import Navigation from "./Navigation";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="center">

                <h1>Shyamansh Sharma</h1>
            </div>
            <Navigation />
        </header>
    );
};

export default Header;
