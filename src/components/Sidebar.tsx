"use client"

import { useState } from "react"
import { usePage } from "@/context/PageContext"

export default function Sidebar() {
    const { currentPage, setCurrentPage, pageTitle, setPageTitle } = usePage()

    const [isNotificationOpen, setNotificationOpen] = useState(false)
    const [isSettingsOpen, setSettingsOpen] = useState(false)
    const [isTrashOpen, setTrashOpen] = useState(false)

    const linkStyle = "px-[10px] py-[2px] w-full text-left rounded-[10px] transition-all cursor-pointer"
    const activeStyle = "bg-[var(--button-hover)]"

    const openNotifications = () => {
        setNotificationOpen(!isNotificationOpen)
        setSettingsOpen(false)
        setTrashOpen(false)
    }

    const openSettings = () => {
        setSettingsOpen(!isSettingsOpen)
        setNotificationOpen(false)
        setTrashOpen(false)
    }

    const openTrash = () => {
        setTrashOpen(!isTrashOpen)
        setNotificationOpen(false)
        setSettingsOpen(false)
    }

    return (
        <div className="w-[250px] max-[1280px]:w-[225px] min-h-screen flex flex-col justify-between p-[15px] bg-[var(--second-background)]">
            <div className="flex flex-col gap-[15px]">
                <header className="flex flex-row gap-[10px] items-center justify-start">
                    <img></img>
                    <h1>Caiobak</h1>
                </header>
                <div className="flex flex-col items-start gap-[3px]">
                    <button className={`${linkStyle} ${currentPage === "initial" ? activeStyle : ""}`} onClick={() => setCurrentPage("initial")}>Página Inicial</button>
                    <button className={`${linkStyle} ${isNotificationOpen ? activeStyle : ""}`} onClick={openNotifications}>Notificações</button>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                    <h2 className="text-[14px] px-[10px]">Particular</h2>
                    <button className={`flex flex-row gap-[5px] items-center justify-between ${linkStyle} ${currentPage === "edit" ? activeStyle : ""}`} onClick={() => setCurrentPage("edit")}>{pageTitle || "Nova Página"}</button>
                    <button className={`${linkStyle} ${currentPage === "newpage" ? activeStyle : ""}`} onClick={() => { setPageTitle("") }}>Adicionar Nova</button>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                    <button className={`${linkStyle} ${isSettingsOpen ? activeStyle : ""}`} onClick={openSettings}>Configurações</button>
                    <button className={`${linkStyle} ${isTrashOpen ? activeStyle : ""}`} onClick={openTrash}>Lixeira</button>
                </div>
            </div>
            <div className="flex flex-row gap-[10px] items-center justify-start">
            </div>
        </div>
    )
}
