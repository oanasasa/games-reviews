import "./style.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Next Reviews</title>
            </head>
            <body className="body">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
