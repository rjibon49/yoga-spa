import React from 'react';
import '../../../GlobalStyle/GlobalStyle.css';
import MonthlyMember from './MonthlyMember';

const MemberShip = () => {
    return (
        <section className="Container-fluid my-5 pb-5">
            <div className="container mb-5">
                <div className="text-center">
                    <h2>Membership</h2>
                    <hr className="divide mx-auto"/>
                    <h6 className="fst-italic">Special offers: choose your introductory path.</h6>
                </div>
                <div className="mb-5">
                    <MonthlyMember></MonthlyMember>
                </div>
            </div>
            
        </section>
    );
};

export default MemberShip;