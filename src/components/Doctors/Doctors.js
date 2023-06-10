import React from 'react';
import './Doctors.css'
import doctor1 from '../../../src/img/appointment/doc-01.png';
import doctor2 from '../../../src/img/appointment/doc-02.png';
import doctor3 from '../../../src/img/appointment/doc-03.png';

const Doctors = (props) => {
    return (

        <div className='doctors-padding'>
            <h2 className='doctor-title'>OUR DOCTORS</h2>
            <div className="doctor">
                <div className="single-doctor">
                    <img src={doctor1} alt="" />
                    <h3>Dr. UJJAINI DEB <br />
                        BDS (HONS), RAIPUR</h3>
                    <button className='book-btn'> Book Appointmet </button>
                </div>
                <div className="single-doctor">
                    <img src={doctor2} alt="" />
                    <h3>Dr. UJJAINI DEB <br />
                        BDS (HONS), RAIPUR</h3>
                    <button className='book-btn'> Book Appointmet </button>
                </div>
                <div className="single-doctor">
                    <img src={doctor3} alt="" />
                    <h3>Dr. UJJAINI DEB <br />
                        BDS (HONS), RAIPUR</h3>
                    <button className='book-btn'> Book Appointmet </button>
                </div>
            </div>
            <div className="upcoming ">
                <div className="upcoming-title">   <h2>UPCOMING EVENTS</h2>
                    <h4>YESNETDIGITAL E-LEARNING PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND HELPFULL DIGITAL MARKETING COMMUNITY</h4></div>

                <div className="book-data-total">
                    <div className="book-date book-border">
                        <h2>19 <br /> FEB</h2>
                        <h4>WE HELD FREE TRAINING FOR <br /> BASIC SHARE MARKET KNOWLEDGE</h4>
                    </div>
                    <div className="book-date book-border">
                        <h2>19 <br /> FEB</h2>
                        <h4>WE HELD FREE TRAINING FOR <br /> BASIC SHARE MARKET KNOWLEDGE
                        </h4>
                    </div>
                    <div className="book-date ">
                        <h2>19 <br /> FEB</h2>
                        <h4>WE HELD FREE TRAINING FOR <br /> BASIC CRYPTOCURRENCY KNOWLEDGE</h4>
                    </div>
                </div>
            </div>
            <div className="doctor-details">
                <p>Yesnetdigital E- Learning Platform is Manage by Yesnetdigital Ecomm </p>
                <p>private limited</p>
                <p>CIN-U72900WB2018PTC229391
                </p>
                <p>GSTIN- 19AABCY0701G1ZM</p>
                <p>startup India -DIPP91749
                </p>
                <p>ISO 9001:2015 No -IQMCB0421A</p>
                <p>TM Application Nummer-5768022</p>
            </div>
        </div>
    );
};

export default Doctors;