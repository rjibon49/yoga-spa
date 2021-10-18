import { useEffect, useState } from "react"

const useInstractor = () =>{
    const [instractors, setInstractors] = useState([]);
    useEffect(() => {
        fetch('./instractor.json')
        .then ( res => res.json())
        .then ( data => setInstractors(data));
    }, []);

    // return courses item
    return [instractors] ;
}

export default useInstractor;