/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./styles/app.css"
import { Route, Routes } from 'react-router-dom';
import Sidemenu from './Components/SideMenu';
import Invite from './Battlefield4/Invite';
import B4Level from './Battlefield4/B4Level';
import BattlefieldPage from './Battlefield4/BattlefieldPage';

export const App = () => {
    return (
        <>
            <div className='container'>
                <div className='bf4__bg' />
                <img src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038fcc47b02ee10043f39c3_soldier__BFemblem.png' className='soldier__bfemblem'/>
                <B4Level /> 
                <Sidemenu />
                <Routes>
                    <Route path='/' element={<BattlefieldPage />} />
                </Routes>
                <Invite />
            </div>
        </>
    )
}


export default App;
