/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import "../styles/invite.css"

const Invite = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    return (
        <div className='invite'
            style={{
                backgroundColor: `${isMouseOver ? 'rgba(16, 16, 16, .8)' : 'rgba(0, 0, 0,0)'}`,
                transform: `${isMouseOver ? 'translate3d(0vh, 0px, 0px)' : 'translate3d(19vh, 0px, 0px)'} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`
            }}
            onMouseOver={() => setIsMouseOver(true)}
            onMouseOut={() => setIsMouseOver(false)}
        >
            <div className='invite__line' style={{ opacity: `${isMouseOver ? '1' : '0'}` }} />
            {/* Squad Invite */}
            <div className='invite__squad'>
                <div className='invite__squad-h-w'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='invite__squad-icon' width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M3.02246 4.94794H0.959961V9.07294L1.64746 10.4479H3.70996L3.02246 9.07294V4.94794ZM1.64746 1.51044H3.70996V3.57294H1.64746V1.51044ZM4.39746 9.07294L5.77246 11.8229H7.14746L8.52246 9.07294V4.94794H4.39746V9.07294ZM5.08496 0.822937H7.83496V3.57294H5.08496V0.822937ZM9.89746 4.94794V9.07294L9.20996 10.4479H11.2725L11.96 9.07294V4.94794H9.89746ZM9.20996 1.51044H11.2725V3.57294H9.20996V1.51044Z" fill="white" />
                    </svg>
                    <div className='invite__squad-h' style={{opacity: `${isMouseOver ? '1' : '0'}`}}> 
                        Squad
                    </div>
                </div>

                {/* Join - Invite */}
                <div className='invite__join-w'>
                    <img 
                        src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1596100550691c84f76_home__join-black.svg' 
                        className='invite__join-icon invite__join-icon--black'
                        style={{display: `none`}}
                    />
                    <img 
                        src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab158769fa828e95f98df_home__join-default.svg' 
                        className='invite__join-icon invite__join-icon--default'
                    />
                    <div 
                        className='invite__join-h' 
                        style={{opacity: `${isMouseOver ? '1' : '0'}`, color: `rgb(255, 255, 255)`}}
                    >
                        Squad Join
                    </div>
                </div>
            </div>
            
            <div className='invite__line' style={{ opacity: `${isMouseOver ? '1' : '0'}` }} />
            {/* Invite-Online */}
            <div className='invite__online' >
                <div className='invite__online-h-w'>
                    <img 
                        src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab159d334e32483dbbcbb_online.svg' 
                        className='invite__online-icon'
                    />
                    <div className='invite__online-h' style={{opacity: `${isMouseOver ? '1' : '0'}`}}>
                        Online
                    </div>
                </div>

                {/* Online-Friends */}
                <div className='invite__online-friend'>
                    <div className='invite__friend-picture-w'>
                        <div className='invite__online-bar' />
                        <img 
                            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1585908791f051d4af4_home__friend-picture-MaryJane.png"
                            className='invite__friend-picture'
                        />
                    </div>

                    <div 
                        className='invite__friend-info'
                        style={{opacity: `${isMouseOver ? '1' : '0'}`, backgroundColor: `rgba(0, 0, 0, 0)`}}
                    >
                        <div className='invite__friend-name' style={{color: `rgb(255, 255, 255)`}}>
                            MaryJane
                        </div>
                        <div className='invite__friend-status' style={{color:`rgba(255,255,255,0.7)`}}>
                            Online
                        </div>
                    </div>
                </div>
            </div>

            <div className='invite__line' style={{ opacity: `${isMouseOver ? '1' : '0'}` }} />
            {/* Invite-Oflfline */}
            <div className='invite__offline'>
                <div className='invite__offline-h-w'>
                    <img 
                        src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab15904900760dbfa7f70_offline.svg" 
                        className='invite__offline-icon' 
                    />
                    <div className='invite__offline-h' style={{opacity: `${isMouseOver? '1' : '0'}`}}>
                        offline
                    </div>
                </div>
                <div className='invite__offline-friend' style={{opacity : `0.4`}}>
                    <div className='invite__friend-picture-w'>
                        <div className='invite__offline-bar' />
                        <img 
                            src="https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1583424fd3ddf23a848_home__friend-picture-420.png" 
                            className='invite__friend-picture'
                        />
                    </div>
                    <div 
                        className='invite__friend-info'
                        style={{opacity: `${isMouseOver?'1':'0'}`, backgroundColor:`rgba(0, 0, 0, 0)`}}
                    >  
                        <div className='invite__friend-name' style={{color: `rgb(255, 255, 255)`}}>
                            420
                        </div>
                        <div className='invite__friend-status' style={{color:`rgba(255,255,255,0.7)`}}>
                            offline
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Invite;