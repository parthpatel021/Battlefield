import React from 'react'
import "../styles/battlepacks.css";


const BattlePacks = () => {

  return (
    <div className='battlepacks'>
        <div className="battlepacks__content">
            <div className='battlepacks__heading-w'>
                <div className='battlepacks__heading '>
                    battlepacks
                </div>
            </div>
            <div className='battlepacks__battlepacks-w w-slider'>
                <div className='battlepacks__mask w-slider-mask'></div>
            </div>
            <div className='battlepacks__info-w'></div>
            <div className='battlepacks__buttons-w-w'></div>
        </div>
    </div>
  )
}

export default BattlePacks