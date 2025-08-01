import { CircleIcon, XIcon } from "raster-react";
//accent-500 x // secondary-600 o

const NameInput = ({ placeholder,value,setValue }: { placeholder: string, value: string, setValue: (name: string) => void }) => (
    <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border-4 border-[var(--secondary-400)] p-2 shadow-[4px_4px_0px_var(--accent-400)] focus:outline-none focus:border-[var(--accent-500)] focus:shadow-[4px_4px_0px_var(--accent-500)]"
    />
)

interface PlayersProps {
    playerX?: string;
    playerO?: string;
    setPlayerX?: (name: string) => void;
    setPlayerO?: (name: string) => void;
}

const Players = ({ playerX, playerO, setPlayerX, setPlayerO }: PlayersProps) => {
    return (
        <div className="flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Players</h2>
            <div className="flex flex-col sm:flex-row justify-between">
                <div className="flex-1">
                    <div className="flex items-center mb-2">
                        <h3>Player</h3> 
                        <XIcon size={40} color="var(--player-x)" strokeWidth={0.25} radius={1} />
                    </div>
                    <NameInput placeholder="Name" value={playerX || ''} setValue={setPlayerX || (() => {})} />
                </div>
                <div className="">
                    <div className="flex items-center mb-2">
                        <h3>Player</h3>
                        <CircleIcon size={40} color="var(--player-o)" strokeWidth={0.25} radius={1} />
                    </div>
                    <NameInput placeholder="Name" value={playerO || ''} setValue={setPlayerO || (() => {})} />
                </div>
            </div>
        </div>
    );
}

export default Players;