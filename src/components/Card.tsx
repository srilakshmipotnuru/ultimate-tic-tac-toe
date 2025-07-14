

interface CardProps {
    title: string
    description: string
}

const Card = (props: CardProps) => {
    const {title, description} = props
    return (
        <div className="shadow-[8px_8px_0_0_var(--accent)] p-4 bg-[var(--background-300)] rounded-none hover:shadow-[8px_8px_0_0_var(--accent-400)] transition-shadow duration-200">
            {title}
            {description}
        </div>
    )
}

export default Card