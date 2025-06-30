import { useEffect, useState } from "react";

export default function Practice () {
    const [state, setState] = useState(null)
    let [count, setCount] = useState(1)
    
    useEffect(() => {
            fetch(`https://swapi.py4e.com/api/people/${count}`)
        .then(res => res.json())
        .then(data => setState(data))
        console.log("Runnn", count)
        },
        [count]
    )

    return (
        <div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
            <button onClick={() => setCount(Ncount => Ncount += 1)} type="button">Add</button>
        </div>
    )
}