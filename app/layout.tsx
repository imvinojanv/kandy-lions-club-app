import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kandy Ranjans - Lions Club",
    description: "The website is designed for the Lions Club of Kandy Ranjans",
    generator: "Next.js",
    keywords: ["lions club", "Kandy ranjans"],
    authors: [
        {
            name: "imvinojanv",
            url: "https://www.linkedin.com/in/imvinojanv/",
        },
    ],
    creator: 'Vinojan Veerapathirathasan',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={plusJakartaSans.className}>
                {children}
            </body>
        </html>
    );
}
