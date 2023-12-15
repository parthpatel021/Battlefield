/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "../styles/app.css"

const B4Level = () => {
    return (
        <div className='level-wrapper'>
            <div className='bf4__level' >
                <div className='bf4__level-bar'></div>
                <img
                    src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png' alt
                    className='bf4__level-icon'
                    // style={{ height: '60px', width: '60px' }}
                />
                <div className='bf4__level-flare'></div>
                <div className='bf4__level-shadow'></div>
            </div>
            <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038f71092c1304bda9086db_BF4__logo.png' className='bf4__logo' />
        </div>
    )
}

export default B4Level