import Card from "./Card"

const classicDescription = "This is the classic version of the game. you can choose out of 3 grids 3x3, 5x5, and 7x7."
const superDescription = "This advanced version features 9 mini-boards within a 3x3 grid. The next board a player must play on is determined by the position of the previous move. Win any one of the mini-boards to win."
const ultimateDescription = "This is the ultimate version of the game. Like in the advanced version, there are 9 mini-boards arranged in a 3x3 grid. However, to win, a player must claim a full row, column, or diagonal (the usual winning conditions) on the larger grid by winning the corresponding mini-board."

const HomePageBody = () => {
    return (
        <div className="flex-col gap-y-6 home-page-body p-6 sm:p-4">
            <h1 className="mb-4">Welcome to the Tic Tac Turbo!</h1>
            <p className="mb-6">Choose your mode, grab a friend, and get ready to play!</p>
            <div className="flex flex-col gap-4 p-4 bg-[var(--background-200)] rounded-none">
                <Card title="Classic" description={classicDescription} modes={['3x3', '5x5', '7x7']} navigateTo="/classic" />
                <Card title="Super" description={superDescription} navigateTo="/super" />
                <Card title="Ultimate" description={ultimateDescription} navigateTo="/ultimate" />
            </div>
        </div>
    )
}

export default HomePageBody