"use client"

import { useEffect } from "react"
import { usePage } from "@/context/PageContext"

export default function MetaManager() {
    const { currentPage, pageTitle } = usePage()

    let title = "Scriba"

    if (currentPage === "edit") {
        title = pageTitle.trim()
            ? `${pageTitle}`
            : "Nova página..."
    }

    if (currentPage === "initial") {
        title = "Página Inicial | Scriba de Caiobak"
    }

     useEffect(() => {
        document.title = title
    }, [title])

    return null
}