/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import "../styles/battlefield4.css"
import "../styles/b4-store.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { BarLoader } from 'react-spinners';


const StoreMenuBlocks = (props) => {
    const { name } = props.menuBlockInfo;
    const [hover, setHover] = useState(false);

    return (
        <Link to='/' className='store-menu'
            style={{ backgroundColor: `${hover ? 'rgb(255,255,255)' : 'rgba(0,0,0,0)'}` }}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <div className="store-menu-h" style={{ color: `${hover ? 'rgb(16,16,16)' : 'rgb(255,255,255)'}` }}>
                {name}
            </div>
        </Link>
    );
}

const StoreOfferBlock = ({ offerData }) => {
    const [hover, setHover] = useState(false);
    const { name, imgURL } = offerData;

    return (
        <Link to='/' className='store__bfv'
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
            <img
                src={imgURL}
                className='store__bfv-image'
                style={{ transform: `${hover ? 'translate3d(0px, -0.6vh, 0px)' : 'translate3d(0px, 0vh, 0px)'} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` }}
            />
            <div
                className='store__bfv-info-w'
                style={{ transform: `${hover ? 'translate3d(0px, -1vh, 0px)' : 'translate3d(0px, 0vh, 0px)'} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` }}
            >
                <div className='store__bfv-title'>
                    {name}
                </div>
            </div>

            <div
                className='store__bfv-bar'
                style={{ transform: `${hover ? 'translate3d(0px, -1vh, 0px)' : 'translate3d(0px, 0vh, 0px)'} scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` }}
            >
            </div>

        </Link>

    );
}

const BattleFieldStore = () => {
    const [storeInfo, setStoreInfo] = useState({
        storeMenuData: [
           
        ],
        storeOfferData: [
        ],
    });
    const [loading, setLoading] = useState(false);

    const getSoldierInfo = async (req, res) => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/b4/store-info`);
            const info = data.storeInfo;
            // console.log(info[0]);  
            setStoreInfo(info[0]);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getSoldierInfo();
    }, []);
    return (
        <div className='store'>
            {
                loading ?
                    <div className='loader'>
                        Loading...
                        <BarLoader color="#ee930e" />
                    </div>
                    :
                    <>
                        <div className='store-menu-w'>
                            {storeInfo.storeMenuData.map((data) => {
                                return (
                                    <StoreMenuBlocks menuBlockInfo={data} />
                                );
                            })}
                        </div>
                        {storeInfo.storeOfferData.map((offer) => {
                            return (
                                <StoreOfferBlock offerData={offer} />
                            );
                        })}
                    </>
            }

        </div>
    )
}

export default BattleFieldStore