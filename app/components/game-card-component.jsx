import styles from "../style_components/games.module.css";

export default function GameCard() {
    async function fetchGames() {
        const url =
            "https://opencritic-api.p.rapidapi.com/game?platforms=ps4%2Cps5&skip=20";
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

            function formatedDate(firstReleaseDate) {
                var date = new Date(firstReleaseDate);

                var formattedDate = date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                });

                return formattedDate;
            }

            return result.map((game) => (
                <div className={styles.card} id={game.id}>
                    <div className={styles.image_container}>
                        <img
                            src={
                                "https://img.opencritic.com/" +
                                game.images.banner.og
                            }
                        />
                    </div>
                    <h4 className={styles.name}>{game.name}</h4>

                    <p className={styles.date}>
                        {" "}
                        Release date:
                        <span>{formatedDate(game.firstReleaseDate)}</span>{" "}
                    </p>
                    <div className={styles.score_container}>
                        <p className={styles.score}>
                            <span>Score: </span>{" "}
                            {(Math.round(game.topCriticScore/10 * 100) / 100).toFixed(2)}
                        </p>
                        <p>Number of reviews: {game.numReviews}</p>
                    </div>
                    <div className={styles.nav_buttons}>
                        <a href={"/reviews/" + game.id}>Check the reviews</a>
                    </div>
                </div>
            ));
        } catch (error) {
            console.log(error);
        }
    }

    return fetchGames();
}
