import "./globals.css"
import type { Metadata } from "next"
import Sidebar from "@/components/Sidebar"

export const metadata: Metadata = {
    title: "scriba - Home",
    description: "Escreva com Scriba",
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="pt-br">
            <body className="flex w-full h-full">
                <Sidebar/>
                {children}
            </body>
        </html>
    );
}
