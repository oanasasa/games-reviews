import styles from "../style_components/global.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_section}>
                <div className={styles.logo_container}>
                    <Link href="/">
                        <p>Game review</p>
                    </Link>
                </div>
                <div className={styles.footer_nav}>
                    <p>Few words about the website</p>
                    <Link href="/reviews">Reviews</Link>
                    <Link href="/about">About</Link>
                </div>
            </div>
        </footer>
    );
}
