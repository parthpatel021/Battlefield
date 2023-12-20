/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "../styles/battlefield4.css"
import SoldierContent from './SoldierContent'
import B4Level from '../Components/B4Level'
import Sidemenu from '../Components/SideMenu'
import Invite from '../Components/Invite'


const BattlefieldPage = (props) => {
    return (
        <>
            <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc47b02ee10043f39c3_soldier__BFemblem.png' className='soldier__bfemblem' />
            <B4Level />
            <Sidemenu handleQuit={props.handleQuit} />
            <div className='battlefield_menu'>
                <div className='tab-container'>
                    <a href="/" className='menu-tab'>
                        <div>Home</div>
                    </a>
                    <a href="/" className='menu-tab'>
                        <div>Multiplayer</div>
                    </a>
                    <a href="/" className='menu-tab'>
                        <div>Campaign</div>
                    </a>
                    <a href="/" className='menu-tab w--current'>
                        <div>Soldier</div>
                    </a>
                    <a href="/" className='menu-tab'>
                        <div>Store</div>
                    </a>
                    <a href="/" className='menu-tab'>
                        <div>More</div>
                    </a>
                </div>
                <div className='menu-bar' />

                <div className='b4-content'>
                    <div className='soldier__content'>
                        <div className="soldier__look">
                            <div className='soldier__dogtag'>
                                <img
                                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc400244d4c8d9870cd_premium%20dog%20tag.png"
                                    className='soldier__dogtag-left'
                                />
                                <img
                                    src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc4c0c4fca91b669847_BF4_Celebration_Dog_Tag.png"
                                    className='soldier__dogtag-right'
                                />
                            </div>
                            <img
                                src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc5c0c4fc008966984e_soldier__pic.png"
                                className='soldier__pic'
                            />
                        </div>

                        <SoldierContent />
                    </div>
                </div>
            </div>
            <Invite />
        </>
    )
}

export default BattlefieldPage