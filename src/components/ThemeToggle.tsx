import { Sun, Moon } from 'lucide-react'
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
            {isdarkMode ? <Sun size={30} className='text-[var(--accent)]' /> : <Moon size={30} className='text-[var(--accent)]' />}
        </button>
    </div>
)
}

export default ThemeToggle