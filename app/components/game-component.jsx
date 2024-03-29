import styles from "../style_components/games.module.css";
import FormReviewGame from "./form-review-game";

export default function GameComponent({ gameID }) {
    async function fetchReviews() {
        const url =
            "https://opencritic-api.p.rapidapi.com/reviews/game/" +
            gameID +
            "?skip=20";
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":
                    "4da91e9933msh5d2f8d7c4257517p11120bjsn4c765e8237fb",
                "X-RapidAPI-Host": "opencritic-api.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            const gameObj = result[0];

            function formatedDate(publishedDate) {
                var date = new Date(publishedDate);

                var formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });

                return formattedDate;
            }

            function averageScore() {
                var sum = 0;
                var reviewNumber = 0;
                result.forEach((item) => {
                    if (item.score) {
                        sum += item.score / 10;
                        reviewNumber++;
                    }
                });

                return (Math.round((sum / reviewNumber) * 100) / 100).toFixed(
                    2
                );
            }

            return (
                <div className={styles.game_section}>
                    <div className={styles.game_container}>
                        <div className={styles.about_game}>
                            <h2>{gameObj.game.name}</h2>
                            <p>
                                Platforms:{" "}
                                {gameObj.Platforms.map((platform) => (
                                    <span key={platform.id}>
                                        {platform.shortName}
                                    </span>
                                ))}
                            </p>
                            <p>
                                Released On:{" "}
                                {formatedDate(gameObj.publishedDate)}
                            </p>
                            <p>
                                Meta Score: {averageScore()}{" "}
                                <span>
                                    Based on: {gameObj.ScoreFormat.base} reviews
                                </span>
                            </p>
                        </div>
                        <div className={styles.form_container}>
                            <FormReviewGame />
                        </div>
                    </div>

                    {result.map((review) => (
                        <div
                            key={review.id}
                            className={styles.reviews_container}>
                            <p className={styles.score}>{review.score}</p>
                            <h3>{review.alias}</h3>
                            <p className={styles.text}>{review.snippet}</p>
                            <p className={styles.publish_date}>
                                {formatedDate(review.createdAt)}
                            </p>
                        </div>
                    ))}
                </div>
            );
        } catch (error) {
            console.log(error);
        }
    }

    return fetchReviews();
}
