"use client"

import { usePage } from "@/context/PageContext"
import { useEffect, useRef, useState } from "react"

export default function Settings() {
    const { setSettingsOpen } = usePage()
    const [visible, setVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const timeout = setTimeout(() => setVisible(true), 10)
        return () => clearTimeout(timeout)
    }, [])

    const handleClose = () => {
        setVisible(false)
        setTimeout(() => {
            setSettingsOpen(false)
        }, 300)
    }

    const handleClickOutside = (event: MouseEvent) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(event.target as Node)
        ) {
            handleClose()
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div
            className={`w-screen h-screen px-[300px] py-[150px] z-50 absolute top-0 left-0 transition-opacity duration-300 ease-in-out ${
                visible ? "opacity-100" : "opacity-0"
            } bg-[rgba(15,15,15,0.8)]`}
        >
            <div
                ref={containerRef}
                className="opacity-100 flex w-full h-full p-[20px] gap-[20px] bg-[var(--background)] rounded-[20px] flex-row"
            >
                <div className="flex w-[30%] h-full flex-col">Item1</div>
                <div className="flex w-[70%] h-full flex-col">Item2</div>
                <button
                    className="mt-auto self-end px-4 py-2 bg-red-600 text-white rounded"
                    onClick={handleClose}
                >
                    Sair das configs
                </button>
            </div>
        </div>
    )
}
