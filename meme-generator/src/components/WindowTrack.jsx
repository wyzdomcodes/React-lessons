import { useEffect, useState } from "react"

export default function WindowTracker() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        window.addEventListener('resize', () => {
            console.log("resized")
            setWidth(window.innerWidth)
        })
    }, [])
    return (
        <div className="h-100 bg-emerald-800 pt-50">
            <h1 className="text-4xl text-center underline text-white">Window Width: {width}</h1>
        </div>
    )
}