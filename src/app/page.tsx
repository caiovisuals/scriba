"use client"

import { PageProvider, usePage } from "@/context/PageContext"

import MetaManager from "@/components/MetaManager"

import InitialFeed from "@/components/feeds/InitialFeed"
import EditFeed from "@/components/feeds/EditFeed"
import Sidebar from "@/components/Sidebar"

function Content() {
    const { currentPage } = usePage()

    return (
        <div className="w-full h-full">
            {currentPage === "initial" && <InitialFeed />}
            {currentPage === "edit" && <EditFeed />}
        </div>
    )
}

export default function Home() {
    return (
        <PageProvider>
            <MetaManager />
            <div className="w-full min-h-screen flex flex-row">
                <Sidebar />
                <Content />
            </div>
        </PageProvider>
    )
}
