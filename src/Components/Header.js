import React from 'react';
import drippy from '../images/drippy.png';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div>
            <header className="u-black u-clearfix u-header u-header" id="sec-4e17">
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <Link
                        to="/"
                        className="u-image u-logo u-image-1"
                        data-image-width={1930}
                        data-image-height={317}
                    >
                        <img src={drippy} className="u-logo-image u-logo-image-1" />
                    </Link>
                    <Link
                        to="/contact"
                        className="u-btn u-btn-round u-button-style u-gradient u-none u-radius-4 u-text-body-alt-color u-btn-1"
                    >
                        CONNECT
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default Header;
