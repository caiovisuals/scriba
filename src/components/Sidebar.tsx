"use client"

import { usePage } from "@/context/PageContext"

export default function Sidebar() {
    const {
        currentPage, setCurrentPage,
        pageTitle, setPageTitle,
        isNotificationOpen, setNotificationOpen,
        isSettingsOpen, setSettingsOpen,
        isTrashOpen, setTrashOpen
    } = usePage()

    const linkStyle = "flex flex-row gap-[8px] px-[10px] py-[3px] items-center w-full text-left rounded-[10px] transition-all cursor-pointer"
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
                    <button className={`${linkStyle} ${currentPage === "initial" ? activeStyle : ""}`} onClick={() => setCurrentPage("initial")}>
                        <img src="/icons/home.png" className="w-[18px] h-[18px]"></img>
                        Página Inicial
                    </button>
                    <button className={`${linkStyle} ${isNotificationOpen ? activeStyle : ""}`} onClick={openNotifications}>
                        <img src="/icons/notification.png" className="w-[18px] h-[18px]"></img>
                        Notificações</button>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                    <h2 className="text-[14px] px-[10px]">Particular</h2>
                    <button className={`${linkStyle} ${currentPage === "edit" ? activeStyle : ""}`} onClick={() => setCurrentPage("edit")}>
                        <img src="/icons/edit.png" className="w-[18px] h-[18px]"></img>
                        {pageTitle || "Nova Página"}
                    </button>
                    <button className={`${linkStyle} ${currentPage === "newpage" ? activeStyle : ""}`} onClick={() => { setPageTitle("") }}>
                        <img src="/icons/newpage.png" className="w-[18px] h-[18px]"></img>
                        Adicionar Nova
                    </button>
                </div>
                <div className="flex flex-col items-start gap-[3px]">
                    <button className={`${linkStyle} ${isSettingsOpen ? activeStyle : ""}`} onClick={openSettings}>
                        <img src="/icons/settings.png" className="w-[18px] h-[18px]"></img>
                        Configurações
                    </button>
                    <button className={`${linkStyle} ${isTrashOpen ? activeStyle : ""}`} onClick={openTrash}>
                        <img src="/icons/trash.png" className="w-[18px] h-[18px]"></img>
                        Lixeira
                    </button>
                </div>
            </div>
            <div className="flex flex-row gap-[10px] items-center justify-start">
            </div>
        </div>
    )
}
