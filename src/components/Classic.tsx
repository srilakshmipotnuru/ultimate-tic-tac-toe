
interface ClassicProps {
    mode: number
}

const Classic = ({ mode }: ClassicProps) => {
    return (
        <div className="flex flex-col gap-4 shadow-[8px_8px_0_0_var(--accent-400)] p-4 bg-[var(--background-300)] rounded-none border-4 border-[var(--secondary-500)] transition-shadow duration-200">
            this is {mode} mode of the classic game
        </div>
    )
}

export default Classic