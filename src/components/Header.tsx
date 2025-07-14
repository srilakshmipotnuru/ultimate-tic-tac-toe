import ThemeToggle from "./ThemeToggle"

const Header = () => {
    return (
        <div className="flex items-center justify-between px-6 py-3 bg-[var(--background-300)] h-[10vh]">
            <h1 className="text-2xl pixel-bold tracking-wide text-[var(--text)]">Tic-Tac-Toe</h1>
            <ThemeToggle/>
        </div>
    )
}
 export default Header