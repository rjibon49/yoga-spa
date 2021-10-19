import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../Images/Banner/404-error.jpg';
import '../GlobalStyle/GlobalStyle.css';

const NotFound = () => {
    return (
        <div className="text-center container my-5 not-found">
            <div style={{backgroundImage:`url(${errorImg}`, backgroundPosition: 'center', backgroundSize:'cover', backgroundRepeat: 'no-repeat',height:600}}>
                <Link to="/home">
                    <div className="h-100 my-auto align-self-center pt-3 mx-auto">
                        <button className="btn btn-primary w-25 fs-1 fw-bold bg-transparent text-white">Go Back Home</button>
                    </div>
                </Link>
            </div>
            
        </div>
    );
};

export default NotFound;