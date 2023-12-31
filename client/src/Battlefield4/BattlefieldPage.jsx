/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import "../styles/battlefield4.css"
import SoldierContent from './SoldierContent'
import B4Level from '../Components/B4Level'
import Sidemenu from '../Components/SideMenu'
import Invite from '../Components/Invite'
import BattleFieldStore from './BattleFieldStore'
import { Link } from 'react-router-dom'

const BattleFieldSoldier = () => {
    return (
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
    )
}

const BattlefieldPage = (props) => {
    const [navMenuIdx, setNavMenuIdx] = useState(0);

    return (
        <>
            <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc47b02ee10043f39c3_soldier__BFemblem.png' className='soldier__bfemblem' />
            <B4Level />
            <Sidemenu handleQuit={props.handleQuit} />
            <div className='battlefield_menu'>
                <div className='tab-container'>
                    <Link href="/" className='menu-tab'>
                        <div>Home</div>
                    </Link>
                    <Link href="/" className='menu-tab'>
                        <div>Multiplayer</div>
                    </Link>
                    <Link href="/" className='menu-tab'>
                        <div>Campaign</div>
                    </Link>
                    <Link href="/" className={`menu-tab ${navMenuIdx === 0 ? 'w--current' : ' '}`}
                        onClick={() => setNavMenuIdx(0)}
                    >
                        <div>Soldier</div>
                    </Link>
                    <Link href="/" className={`menu-tab ${navMenuIdx === 1 ? 'w--current' : ' '}`}
                        onClick={() => setNavMenuIdx(1)}
                    >
                        <div>Store</div>
                    </Link>
                    <Link href="/" className='menu-tab'>
                        <div>More</div>
                    </Link>
                </div>
                <div className='menu-bar' />

                {navMenuIdx === 0 ?
                    <BattleFieldSoldier />
                    :
                    <BattleFieldStore />
                }

            </div>
            <Invite />
        </>
    )
}

export default BattlefieldPage