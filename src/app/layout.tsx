import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Noto_Serif } from "next/font/google";
import "./globals.css";
import { Providers } from "../Components/Providers";
import { Navbar } from "@/Components/Layout/Navbar";
import { Footer } from "@/Components/Layout/Footer";
import { WhatsAppFab } from "@/Components/ui/WhatsApp-Fab";

const notoSerif = Noto_Serif({
    variable: "--font-noto-serif",
    subsets: ["latin"],
    weight: ['400', '700']
});

const  manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-manrope',
    weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
    title: "Dny Deco Jepara",
    description: "Elevating curated living through intentional design and artisan craftsmanship",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="'light" suppressHydrationWarning>
            <body className={`${notoSerif.variable} ${manrope.variable} font-body bg-background text-on-background antialiased`}>
                <Providers>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <WhatsAppFab />
                </Providers>
            </body>
        </html>
    );
}
