import React from 'react';
import '../../GlobalStyle/GlobalStyle.css';
import useInstructors from '../../hooks/useInstructors';
import Instructor from './Instructor';

const Instructors = () => {
    const [instuctors] = useInstructors();

    return (
        <div className="container-fluid">
            <div className="instructor-bg">
                <div className="title-center">
                    <div className="text-center h-25 mx-auto">
                        <h1 className="title-text">INSTRUCTORS</h1>
                    </div>
                </div>
            </div>
            <section className="container my-5">
                <div className="row">
                    {
                        instuctors.map ( instructor => <Instructor
                        key = {instructor.id}
                        instructor = {instructor}
                        ></Instructor>)
                    }
                </div>
            </section>           
        </div>
    );
};

export default Instructors;