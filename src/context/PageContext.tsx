"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Page = "initial" | "edit" | "newpage"

interface PageContextProps {
    currentPage: Page
    setCurrentPage: (page: Page) => void
    pageTitle: string
    setPageTitle: (title: string) => void
}

const PageContext = createContext<PageContextProps | undefined>(undefined)

export const PageProvider = ({ children }: { children: ReactNode }) => {
    const [currentPage, setCurrentPage] = useState<Page>("initial")
    const [pageTitle, setPageTitle] = useState<string>("")

    return (
        <PageContext.Provider value={{ currentPage, setCurrentPage, pageTitle, setPageTitle }}>
            {children}
        </PageContext.Provider>
    )
}

export const usePage = () => {
    const context = useContext(PageContext)
    if (!context) throw new Error("usePage must be used within PageProvider")
    return context
}
