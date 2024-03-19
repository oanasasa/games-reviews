import styles from "../style_components/global.module.css";
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header_section}>
                <div className={styles.logo_container}>
                    <Link href="/">
                        <p>Game review</p>
                    </Link>
                </div>
                <nav className={styles.nav_container}>
                    <Link href="/reviews">Reviews</Link>
                    <Link href="/about">About</Link>
                </nav>
            </div>
        </header>
    );
}
