import React from 'react';

const AboutContent = ({about}) => {
    const { title, subtitle, images} = about ;

    return (
        <div className="col-xl-4 col-md-6 col-sm-12">  
            <div className="row">
                <div className="col-3">
                <img className="img-thumbnail border-0" src={images} alt="" />
                </div>
                <div className="col-9">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                </div>
        </div>
        </div>
    );
};

export default AboutContent;