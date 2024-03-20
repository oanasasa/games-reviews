import ReviewGameComponent from "../../components/review-game-component";

export default function GamePage({ params }) {
    return (
        <div>
            <ReviewGameComponent gameID={params.id} />
        </div>
    );
}
