import React from 'react';
import './Popular.css';
import couese1 from '../../../src/img/Popular/courses1.jpeg'

const Popular = (props) => {
    return (
        <div className='popular'>
            <h2 className='popular-title'>POPULAR COURSES</h2>
            <div className="course">
                <div className="single-course">
                   <div className="img-box">
                   <img style={{width:"400px"}} src={couese1} alt="" />
                   </div>
                   <div className="blue-area">
                   <h2>Digital Marketing
                        Fees - fluctuate over time</h2>
                   </div>
                </div>
                <div className="single-course">
                   <div className="img-box">
                   <img style={{width:"400px"}} src={couese1} alt="" />
                   </div>
                   <div className="blue-area">
                   <h2>Digital Marketing
                        Fees - fluctuate over time</h2>
                   </div>
                </div>
                <div className="single-course">
                   <div className="img-box">
                   <img style={{width:"400px"}} src={couese1} alt="" />
                   </div>
                   <div className="blue-area">
                   <h2>Digital Marketing
                        Fees - fluctuate over time</h2>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;