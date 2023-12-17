import React, { useState } from 'react'
import "../styles/side-menu.css"
import sidemenuData from './../assets/sidemenuData.js';

const SideMenuTab = (props) => {
    const tabInfo = props.sideMenuTabInfo;
    const currentTab = 'Battlefield 4';
    const [isMouseOver, setIsMouseOver] = useState(false);
    return (
        <a href='/'
            className={`${tabInfo.cName +  (tabInfo.name === currentTab ? ' w--current' : ' ')}`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            style={{ backgroundImage: `url(${tabInfo.imgURL})`, opacity: `${isMouseOver? '1' : `${tabInfo.name === 'Battlefield 4' ? '0.8':'0.5'}`}`}}
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