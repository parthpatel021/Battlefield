import React, { useState } from 'react'
import "../styles/side-menu.css"
import sidemenuData from '../assets/sidemenuData.js';
import { Link } from 'react-router-dom';

const SideMenuTab = (props) => {
    const tabInfo = props.sideMenuTabInfo;
    const currentTab = 'Battlefield 4';
    const [isMouseOver, setIsMouseOver] = useState(false);

    const handleClick = () => {
        if(tabInfo.name === 'Quit'){
            props.handleQuit();
        }
    }
    return (
        <Link to='/'
            className={`${tabInfo.cName +  (tabInfo.name === currentTab ? ' w--current' : ' ')}`}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
            style={{ backgroundImage: `url(${tabInfo.imgURL})`, opacity: `${isMouseOver? '1' : `${tabInfo.name === 'Battlefield 4' ? '0.8':'0.5'}`}`}}
            onMouseDown={() => handleClick()}
        >
            <div
                className='side-menu__popup '
                style={{ display: `${isMouseOver ? 'block' : 'none'}`, opacity: `${isMouseOver ? 1 : 0}` }}
            >
                <div className='side-menu__text'>
                    {tabInfo.name}
                </div>
            </div>
        </Link>
    );
}

const Sidemenu = (props) => {
    return (
        <div className='side-menu__bar'>
            <div className='side-menu__tabs'>
                {sidemenuData.map((d, index) => <SideMenuTab key={index} sideMenuTabInfo={d} handleQuit={props.handleQuit} />)}
            </div>
        </div>
    )
}

export default Sidemenu