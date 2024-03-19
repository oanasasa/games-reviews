
import styles from "./style_components/global.module.css";

export default function Homepage() {
    return (        
    <div id="homepage">
        <div className={styles.page_container}>
            <div className={styles.home_hero_section}>
                <h1>Welcome to <span>Game Review</span></h1>
            </div>

            <div className={styles.about_section}>
                <div className={styles.row_container_xl}>
                    <h2>About our website</h2>
                </div>

            </div>
        </div>

    </div>
);
}
