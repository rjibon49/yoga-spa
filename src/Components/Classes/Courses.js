import useInstructors from '../../hooks/useInstructors';
import Course from './Course';

const Courses = () => {

    const [courses] = useInstructors();

    return (
        <div className="container-fluid">
            <div className="instructor-bg">
                <div className="title-center">
                    <div className="text-center h-25 mx-auto">
                        <h1 className="title-text">CLASSES</h1>
                    </div>
                </div>
            </div>
            <section className="container my-5">
                <div className="row">
                    {
                        courses.map ( course=> <Course
                        key = {course.id}
                        course = {course}
                        ></Course>)
                    }
                </div>
            </section>           
        </div>
    );
};

export default Courses;