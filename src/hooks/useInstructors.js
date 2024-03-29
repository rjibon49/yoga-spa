import { useEffect, useState } from "react";

const useInstructors = () =>{
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        fetch('./instructor.json')
        .then ( res => res.json())
        .then ( data => setInstructors(data));
    }, []);

    // return courses item
    return [instructors] ;
}

export default useInstructors;