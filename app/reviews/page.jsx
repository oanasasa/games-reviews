import GameCard from "../components/game-card-component";
import styles from "../style_components/games.module.css";

export default function ReviewsPage() {
    return (
        <div id="reviewPage">
            <div className={styles.page_container}>
                <div className={styles.hero_section}>
                    <div className={styles.row_container_m}>
                        <h1>Check the reviews</h1>
                        <p>
                            Please be aware that these descriptions are just
                            public opinion. Etc etc etc etc
                        </p>
                    </div>
                </div>
                <div className={styles.games_section}>
                    <div className={styles.row_container_m}>
                        <div className={styles.games_grid}>
                            <GameCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
