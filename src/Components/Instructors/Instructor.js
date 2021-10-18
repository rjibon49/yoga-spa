import React from 'react';
import { Link } from 'react-router-dom';

const Instructor = ({instructor}) => {
    const {title,images, id} = instructor
    return (
        <div className="col-xl-3 col-md-4 col-sm-12 my-5">
            <div>
                <img className="img-thumbnail border-0" src={images} alt="" />
                <div className="text-center my-3 text-uppercase">
                    <Link to={`/instructors/${id}`}>
                        <h3>{title}</h3>
                    </Link>
                </div>
            </div>
            
        </div>
    );
};

export default Instructor;