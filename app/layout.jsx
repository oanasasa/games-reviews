import "./style.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <title>Next Reviews</title>
            </head>
            <body className="font-primary bg-dark *:text-primary *:w-full">
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
