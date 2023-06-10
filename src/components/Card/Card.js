import React from 'react';
import './Card.css';
import icon1 from '../../../src/img/card/icon-1.png'

const Card = (props) => {
    return (
        <div className='card'>
            <div className="single-card">
                <img style={{width:'80px'}} src={icon1} alt="" />
                <h2>6+ <span>course</span> </h2>
            </div>
            <div className="single-card">
            <img style={{width:'80px'}} src={icon1} alt="" />
                <h2>Expert <span>mentors</span>
                </h2>
            </div>
            <div className="single-card">
            <img style={{width:'80px'}} src={icon1} alt="" />
                <h2>Life time
                    <span>access</span></h2>
            </div>

        </div>
    );
};

export default Card;