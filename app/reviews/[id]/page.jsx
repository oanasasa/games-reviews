import GameComponent from "../../components/game-component";
import ReviewGameComponent from "../../components/review-game-component";
export default function GamePage({ params }) {
    return (
        <div>
            <ReviewGameComponent />
            <GameComponent gameID={params.id} />

        </div>
    );
}
