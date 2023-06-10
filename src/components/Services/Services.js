import React from 'react';
import './Services.css'
import service1 from '../../../src/img/service/astro-service.jpg';
import service2 from '../../../src/img/service/doctor-service-02.jpg';

const Services = (props) => {
    return (
        <div className="services">
            <h2 className='services-title'>OUR SERVICES</h2>
            <div className="service-padding">
                <div className="single-service">
                    <div className="img-box">
                        <img src={service1} alt="" />
                    </div>
                    <div className="blue-box">
                        Online Health Consultation with MBBS  <br />or BHMS or BDS Doctor <br />
                        Fees - 100 (INR)
                    </div>
                </div>
                <div className="single-service">
                    <div className="img-box">
                        <img src={service2} alt="" />
                    </div>
                    <div className="blue-box">
                        Online Astrology Consultation <br />
                        Fees - 100 (INR)
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;