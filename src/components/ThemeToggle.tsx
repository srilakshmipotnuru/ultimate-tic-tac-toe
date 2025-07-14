import { SunIcon, MoonIcon } from "raster-react"
import { useState } from 'react'


const ThemeToggle= ()=>{
    const [isdarkMode, setIsdarkMode] = useState(
       document.documentElement.classList.contains("dark") 
    )
    const changeMode = () => {
        document.documentElement.classList.toggle("dark")
        setIsdarkMode(!isdarkMode)
    }
return (
    <div className="display-flex">
        <button onClick={changeMode} className="p-2 transition-transform duration-200 hover:scale-120 cursor-pointer" 
        title={isdarkMode ? "Switch to Light mode" : "Switch to Dark Mode"}>
            {isdarkMode ? <SunIcon size={50} color="var(--accent)" strokeWidth={0.25} radius={1} /> : <MoonIcon size={50} color="var(--accent)" strokeWidth={0.25} radius={1} />}
        </button>
    </div>
)
}

export default ThemeToggle