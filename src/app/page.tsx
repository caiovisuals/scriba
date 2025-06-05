"use client"

import { PageProvider, usePage } from "@/context/PageContext"

import MetaManager from "@/components/MetaManager"

import InitialFeed from "@/components/feeds/InitialFeed"
import EditFeed from "@/components/feeds/EditFeed"
import Sidebar from "@/components/Sidebar"
import Trash from "@/components/Trash"
import Settings from "@/components/Settings"

function Content() {
  const { currentPage } = usePage()

  return (
    <div className="w-full h-full">
      {currentPage === "initial" && <InitialFeed />}
      {currentPage === "edit" && <EditFeed />}
      {currentPage === "newpage" && <EditFeed />}
    </div>
  )
}

function MainContent() {
  const { isTrashOpen, isSettingsOpen } = usePage()

  return (
    <div className="w-full min-h-screen flex flex-row">
      <Sidebar />
      <Content />
      {isTrashOpen && <Trash />}
      {isSettingsOpen && <Settings />}
    </div>
  )
}

export default function Home() {
  return (
    <PageProvider>
      <MetaManager />
      <MainContent />
    </PageProvider>
  )
}
