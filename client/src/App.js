/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import "./styles/app.css"
import { Route, Routes, useNavigate } from 'react-router-dom';
import BattlefieldPage from './Battlefield4/BattlefieldPage';
import BattlePacks from './Battlefield4/BattlePacks';

export const App = () => {
    const navigate = useNavigate();
    const [quit,setQuit] = useState(false);
    const handleQuit = () => {
        setQuit(true);
    }
    return (
        <>
            <div className='container'>
                <div className='bf4__bg' />
                <Routes>
                    <Route path='/' element={<BattlefieldPage handleQuit={handleQuit} />} />
                    <Route path='/battlepacks' element={<BattlePacks />} />
                </Routes>

                <div className='quit__wrapper' style={{display: `${quit ? 'flex' : 'none'}`}}>
                    <div className='quit__options-w'>
                        <div className='quit__text-w'>
                            <div className='quit__text'>quit</div>
                            <div className='quit__text-2'>Do you really want to quit?</div>
                        </div>
                        <div className='quit__buttons-w'>
                            <div className='quit__button' onClick={() => setQuit(false)}>yes</div>
                            <div className='quit__button quit__button--nomargin' onClick={() => setQuit(false)}>no</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default App;
