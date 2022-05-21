import { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
function About () {
    const [ count, setCount ] = useState(0);
    const [ minus, setMinus ] = useState(100);
    const value = useRef(1);

    // useEffect(() => {
    //     document.title = `ini diklik sebanyak ${value.current}`
    //     console.log('kepanggil', value);
    // }, [count])
    
    return (
        <div class="my-5">
            <div class="text-center">
            <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h1>On Progress</h1>
            </div>
        </div>
    )
}

export default About;