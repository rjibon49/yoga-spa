import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center">
            <h1>404 Not Found</h1>
            <Link to="/home">
                <button className="btn btn-primary">Go To Home</button>
            </Link>
        </div>
    );
};

export default NotFound;