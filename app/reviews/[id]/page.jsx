import GameComponent from "../../components/game-component";
export default function GamePage({ params }) {
    return (
        <div>
            <GameComponent gameID={params.id} />
        </div>
    );
}
