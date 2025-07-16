import { ChevronRightIcon, ChevronDownIcon } from "raster-react"
import { useState } from "react"
import { useNavigate } from "react-router"

interface CardProps {
    title: string
    description: string
    modes?: string[]
    navigateTo?: string
}

const Card = ({ title, description, modes, navigateTo }: CardProps) => {
    const [showDesc, setShowDesc] = useState(false)
    const navigate = useNavigate();

    return (
        <div
            className="flex flex-col gap-4 shadow-[8px_8px_0_0_var(--accent-400)] p-4 bg-[var(--background-300)] rounded-none border-4 border-[var(--secondary-500)] transition-shadow duration-200"
        >
            <h2 className="pixel-bold text-xl text-[var(--accent-600)] ">{title}</h2>
            <button onClick={() => setShowDesc(!showDesc)} className="flex items-center gap-2" >
                {showDesc ? <ChevronDownIcon size={50} color="var(--accent-600)" strokeWidth={0.25} radius={1} /> : <ChevronRightIcon size={50} color="var(--accent-600)" strokeWidth={0.25} radius={1} />}
                <p className="text-xs sm:text-base">{showDesc ? `Hide description` : `Show description`}</p>
            </button>
            {showDesc && <div className="ml-15 text-sm sm:text-base">{description}</div>}
            {modes ? (
                <div className="flex flex-wrap gap-2 mt-2 justify-center sm:justify-start">
                    {modes.map((mode, index) => (
                        <button key={index} className="px-3 py-1 shadow-[4px_4px_0_0_var(--accent-400)] bg-[var(--background-200)] border border-[var(--secondary-500)]"
                            onClick={() => navigateTo && navigate(`${navigateTo}/${mode}`)}>
                            Play {mode}
                        </button>
                    ))}
                </div>
            ) : <button className="mt-2 px-3 w-auto sm:w-max py-1 shadow-[4px_4px_0_0_var(--accent-400)] bg-[var(--background-200)] border border-[var(--secondary-500)]"
            onClick={() => navigateTo && navigate(navigateTo)}>
                Play {title}
            </button>}
        </div>
    )
}

export default Card