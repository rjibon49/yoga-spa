import React from 'react';
import { Link } from 'react-router-dom';
import '../../../GlobalStyle/GlobalStyle.css';
import MonthlyMember from './MonthlyMember';

const MemberShip = () => {
    return (
        <section className="Container-fluid my-5">
            <div className="container">
                <div className="text-center">
                    <h2>Membership</h2>
                    <hr className="divide mx-auto"/>
                    <h6 className="fst-italic">Special offers: choose your introductory path.</h6>
                </div>
                <div className="">
                    <MonthlyMember></MonthlyMember>
                </div>
            </div>
            
        </section>
    );
};

export default MemberShip;