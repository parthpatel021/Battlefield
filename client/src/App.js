/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import "./styles/app.css"
import { Route, Routes } from 'react-router-dom';
import BattlefieldPage from './Battlefield4/BattlefieldPage';
import BattlePacks from './Battlefield4/BattlePacks';

export const App = () => {
    const [quit,setQuit] = useState(false);
    const handleQuit = () => {
        setQuit(true);
    }
    return (
        <>
            <div className='container'>
                <Routes>
                    <Route path='/' element={<BattlefieldPage handleQuit={handleQuit} />} />
                    {/* <Route path='/store' element={<BattleFieldStore />} /> */}
                    <Route path='/battlepacks' element={<BattlePacks />} />
                </Routes>

                <div className='quit-w' style={{display: `${quit ? 'flex' : 'none'}`}}>
                    <div className='quit-options'>
                        <div className='quit-text-w'>
                            <div className='quit-text'>quit</div>
                            <div className='quit-text-2'>Do you really want to quit?</div>
                        </div>
                        <div className='quit-buttons'>
                            <div className='quit-button' onClick={() => setQuit(false)}>yes</div>
                            <div className='quit-button quit-button-right' onClick={() => setQuit(false)}>no</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default App;
