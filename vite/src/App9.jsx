import React from "react";
import { useState } from "react";
import BootstrapMobileMenu from "./components/BootstrapMobileMenu";

const App9 = () => {
    const [enableMobileMenu, setEnableMenu] = useState(false);

    return (
        <div className='App'>
            <div className='main-menu'>
                <div className='main-menu-desktop-mode'>
                    {" "}
                    <BootstrapMobileMenu />
                </div>
                <div className='main-menu-mobile-mode'>
                    <div className='text-right'>
                        <i className='fas fa-bars menu-bar-icon' onClick={() => setEnableMenu(!enableMobileMenu)}></i>
                        <div className='mobile-menu-area'>{enableMobileMenu && <BootstrapMobileMenu />}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App9;
