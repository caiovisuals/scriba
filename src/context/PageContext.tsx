"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Page = "initial" | "edit" | "newpage"

interface PageContextProps {
  currentPage: Page
  setCurrentPage: (page: Page) => void
  pageTitle: string
  setPageTitle: (title: string) => void

  isNotificationOpen: boolean
  setNotificationOpen: (open: boolean) => void
  isSettingsOpen: boolean
  setSettingsOpen: (open: boolean) => void
  isTrashOpen: boolean
  setTrashOpen: (open: boolean) => void
}

const PageContext = createContext<PageContextProps | undefined>(undefined)

export const PageProvider = ({ children }: { children: ReactNode }) => {
  const [currentPage, setCurrentPage] = useState<Page>("initial")
  const [pageTitle, setPageTitle] = useState<string>("")
  const [isNotificationOpen, setNotificationOpen] = useState(false)
  const [isSettingsOpen, setSettingsOpen] = useState(false)
  const [isTrashOpen, setTrashOpen] = useState(false)

  return (
    <PageContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        pageTitle,
        setPageTitle,
        isNotificationOpen,
        setNotificationOpen,
        isSettingsOpen,
        setSettingsOpen,
        isTrashOpen,
        setTrashOpen,
      }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const usePage = () => {
  const context = useContext(PageContext)
  if (!context) throw new Error("usePage must be used within PageProvider")
  return context
}
