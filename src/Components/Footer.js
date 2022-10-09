import React from 'react';
import drippy from '../images/drippy.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
            <footer
                className="u-align-center u-clearfix u-footer u-grey-80 u-footer"
                id="sec-4575"
            >
                <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
                    <Link to="/">
                        <img src={drippy} className="img-footer" />
                    </Link>
                    <p class="u-small-text u-text u-text-variant u-text-1">
                        DRIP INU PROJECT 2022.
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
