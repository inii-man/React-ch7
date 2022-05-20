import { useState, useEffect, useRef } from 'react';

function About () {
    const [ count, setCount ] = useState(0);
    const [ minus, setMinus ] = useState(100);
    const value = useRef(1);

    useEffect(() => {
        document.title = `ini diklik sebanyak ${value.current}`
        console.log('kepanggil', value);
    }, [count])
    
    return (
        <div>
            <h1>
                About
            </h1>
            <h3>ini diklik sebanyak {count} kali</h3>
            <button onClick={() => setCount(count + 1)}>Click</button>

            <h3>ini berkurang terus {minus}</h3>
            <button onClick={() => setMinus(minus - 1)}>Click</button>

            <h3>{value.current}</h3>
            <button onClick={() => {
                value.current = value.current + 1
                console.log(value.current);
            }}>Click</button>

        </div>
    )
}

export default About;