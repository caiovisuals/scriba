import "./globals.css"
import type { Metadata } from "next"
import { PageProvider } from "@/context/PageContext"

export const metadata: Metadata = {
    description: "Escreva com Scriba",
}

export default function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="pt-br">
            <body className="flex w-full">
                <PageProvider>
                    {children}
                </PageProvider>
            </body>
        </html>
    );
}
