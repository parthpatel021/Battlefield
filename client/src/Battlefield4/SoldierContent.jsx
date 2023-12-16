/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "../styles/battlefield4.css"

const soldierInfo = {
    level: {
        levelName: 'cookie',
        levelNumber: 63,
        currentRating: 69840,
        rankUpRating: 110000,
        estimatedRankUp: '1h'
    },
};

const SoldierContent = () => {
    return (
        <div className='soldier__content-w'>
            <div className="soldier__info">
                <div className='soldier__level'>
                    <div className='soldier__level-bar'></div>
                    <img
                        src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png' alt
                        className='soldier__level-icon'
                    />
                </div>

                <div className='soldier__level-info'>
                    <div className='soldier__level-info-h'>
                        {soldierInfo.level.levelName}
                    </div>
                    <div className='soldier__level-stats'>
                        <div className="soldier__level-no">
                            <div className="soldier__level-text">{soldierInfo.level.levelNumber}</div>
                        </div>
                        <div className="soldier__level-current">
                            {new Intl.NumberFormat().format(soldierInfo.level.currentRating)} / {new Intl.NumberFormat().format(soldierInfo.level.rankUpRating)}
                        </div>
                        <div className="soldier__level-estimate">
                            - Estimated rank up in {soldierInfo.level.estimatedRankUp}
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className='soldier__select'>

            </div>
        </div>
    );
}

export default SoldierContent;