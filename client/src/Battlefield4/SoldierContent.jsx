/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import "../styles/battlefield4.css"
import axios from "axios";
import soldierInfoFormate from '../assets/SoldierInfoFormate';
import {Link} from "react-router-dom";
import {BarLoader} from "react-spinners";

const SoldierMenuBlock = (props) => {
    const { name, stats, total, link } = props.menuBlockInfo;
    const [hover, setHover] = useState(false);

    return (
        <Link to={`${link ? link : '/'}`} className='soldier__menu'
            style={{ backgroundColor: `${hover ? 'rgb(255,255,255)' : 'rgba(0,0,0,0)'}` }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <div className="soldier__menu-h" style={{ color: `${hover ? 'rgb(16,16,16)' : 'rgb(255,255,255)'}` }}>
                {name}
            </div>
            {name === 'battlePacks' ?
                <></> :
                <div className="soldier__menu-stats" style={{ color: `${hover ? 'rgb(16,16,16)' : 'rgb(255,255,255)'}` }}>
                    <div className="soldier__menu-stats-h" style={{ color: `${hover ? 'rgb(16,16,16)' : 'rgb(255,255,255)'}` }}>
                        {stats}/{total}
                    </div>
                    <div className='soldier_menu-stats-bar'>
                        <div className="soldier__stats-bar-orange" style={{ width: `${stats / total * 7}vh` }}></div>
                        <div className="soldier__menu-stats-bar-black" style={{ backgroundColor: `${hover ? 'rgba(16,16,16,0.3)' : 'rgba(16,16,16,0.5)'}` }}></div>
                    </div>
                </div>
            }
        </Link>
    );
}

const SoldierStats = (props) => {
    const soldierInfo = props.soldierInfo;
    const { winsPercentagw, scorePerMin, killsPerMin } = soldierInfo?.stats;
    const tops = soldierInfo?.tops;
    return (
        <div className='soldier__game-stats'>
            <div className="soldier__stats-w">
                <div className="soldier__stats">
                    <div className="soldier__stats-h">wins</div>
                    <div className='soldier__stats-percent'>{winsPercentagw}%</div>
                </div>
                <div className="soldier__stats">
                    <div className="soldier__stats-h">score/min</div>
                    <div className='soldier__stats-percent'>{scorePerMin}</div>
                </div>
                <div className="soldier__stats">
                    <div className="soldier__stats-h">kills/min</div>
                    <div className='soldier__stats-percent'>{killsPerMin.toFixed(2)}</div>
                </div>
            </div>
            <div className='soldier__top-stats-w'>
                {tops?.map((d, index) => <SoldierTopStatsComponent key={index} stats={d} />)}
            </div>
        </div>
    );
}

// Soldier Top Stats Component
const SoldierTopStatsComponent = (props) => {
    const { catName, name, whiteImgURL, blackImgURL, kills, score, cName } = props.stats;
    const [hover, setHover] = useState(false);
    return (
        <Link to="/"
            className='soldier__top-stats'
            style={{ backgroundColor: `${hover ? 'rgb(255,255,255)' : 'rgba(16,16,16,0.5)'}` }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <div className="soldier__top-stats-h" style={{ color: `${hover ? 'rgb(16,16,16)' : 'rgba(255,255,255,0.7)'}` }}>
                top {catName}
            </div>

            <div className='soldier__top-stats-info'>
                <div className='soldier__top-stats-weapon' style={{ color: `${hover ? 'rgb(16,16,16)' : 'rgb(255,255,255)'}` }} >
                    {name}
                </div>
                <div className='soldier__top-stats-weapon-s' style={{ color: `${hover ? 'rgba(16,16,16,0.5)' : 'rgba(255,255,255,0.5)'}` }}>
                    {kills ? kills + ' Kills' : new Intl.NumberFormat().format(score) + ' score'}
                </div>
            </div>

            <img src={whiteImgURL} className={`${cName}-white`} style={{ display: `${hover ? 'none' : 'block'}` }} />
            <img src={blackImgURL} className={`${cName}-black`} style={{ display: `${hover ? 'block' : 'none'}` }} />

        </Link>
    );
}

const SoldierContent = () => {
    const [soldierInfo, setSoldierInfo] = useState(soldierInfoFormate);
    const [loading, setLoading] = useState(false);
    
    const getSoldierInfo = async (req, res) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/b4/soldier-info`);
            const info = data.soldierInfo;
            // console.log(info[0]);  
            setSoldierInfo(info[0]);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getSoldierInfo();
    }, []);

    const { levelName, levelNumber, currentRating, rankUpRating, estimatedRankUp } = soldierInfo.level;
    return (
        <>
            {
                loading ?
                    <div className='loader'>
                        Loading...
                        <BarLoader color="#ee930e" />
                    </div>
                    :
                    <div className='soldier__content-w'>

                        {/* Soldier Level-Info */}
                        <div className="soldier__info">
                            <div className='soldier__level'>
                                <div className='soldier__level-bar'></div>
                                <img
                                    src='https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/601ab1b899e303b6e902c5e4_home__level-icon.png'
                                    className='soldier__level-icon'
                                />
                            </div>

                            <div className='soldier__level-info'>
                                <div className='soldier__level-info-h'>
                                    {levelName}
                                </div>
                                <div className='soldier__level-stats'>
                                    <div className="soldier__level-no">
                                        <div className="soldier__level-text">{levelNumber}</div>
                                    </div>
                                    <div className="soldier__level-current">
                                        {new Intl.NumberFormat().format(currentRating)} / {new Intl.NumberFormat().format(rankUpRating)}
                                    </div>
                                    <div className="soldier__level-estimate">
                                        - Estimated rank up in {estimatedRankUp}
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Soldier - Stats */}
                        <div className='soldier__select'>

                            {/* Soldier Menu -info */}
                            <div className="soldier__menu-w">
                                {soldierInfo.menu.map((d, index) => (
                                    <SoldierMenuBlock key={index} menuBlockInfo={d} />
                                ))}
                            </div>

                            {/* Soldier Stats & tops */}
                            <SoldierStats soldierInfo={soldierInfo} />
                        </div>
                    </div>
            }
        </>
    );
}

export default SoldierContent;