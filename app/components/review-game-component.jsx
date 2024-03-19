import styles from "../style_components/games.module.css";

export default function ReviewGameComponent({ gameID }) {
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

            function formatedDate(publishedDate) {
                var date = new Date(publishedDate);

                var formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });

                return formattedDate;
            }

            return result.map((review) => (
                <div className={styles.review} id={review.id}>
                    <h2>{review.title}</h2>
                    <p className={styles.publish_date}>
                        Publish date:
                        <span>{formatedDate(review.publishedDate)}</span>{" "}
                    </p>
                    <div className={styles.review_text}>
                        <p className={styles.score}>Score: {review.score}</p>
                        <p className={styles.text}>{review.snippet}</p>
                    </div>
                </div>
            ));
        } catch (error) {
            console.log(error);
        }
    }

    return fetchReviews();
}
