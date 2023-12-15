import React, { useState } from 'react'
import "../styles/side-menu.css"
import sidemenuData from './../assets/sidemenuData.js';

const SideMenuTab = (props) => {
    const tabInfo = props.sideMenuTabInfo;
    const [isMouseOver, setIsMouseOver] = useState(false);
    return (
        <a href='/'
            className='side-menu__game'
            style={{ backgroundImage: `url(${tabInfo.imgURL})` }}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
        >
            <div
                className='side-menu__popup '
                style={{ display: `${isMouseOver ? 'block' : 'none'}`, opacity: `${isMouseOver ? 1 : 0}` }}
            >
                <div className='side-menu__text'>
                    {tabInfo.name}
                </div>
            </div>
        </a>
    );
}

const Sidemenu = () => {
    return (
        <div className='side-menu__bar'>
            <div className='side-menu__tabs'>
                {sidemenuData.map((d, index) => <SideMenuTab sideMenuTabInfo={d} />)}
                
            </div>
        </div>
    )
}

export default Sidemenu