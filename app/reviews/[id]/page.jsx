import ReviewGameComponent from "../../components/review-game-component";

export default function Page({ params }) {
    return (
        <div>
            <ReviewGameComponent gameID={params.id} />
        </div>
    );
}
