import { useRef, useState, useEffect } from "react"
import { usePage } from "@/context/PageContext"

export default function EditFeed() {
    const editableRef = useRef<HTMLHeadingElement>(null)
    const paragraphRef = useRef<HTMLDivElement>(null)

    const { pageTitle, setPageTitle } = usePage()
    const [paragraph, setParagraph] = useState("")
    const [banner, setBanner] = useState(false)

    const [lastEdited, setLastEdited] = useState<Date | null>(null)

    const handleInput = () => {
        if (editableRef.current) {
            const text = editableRef.current.textContent?.trim() || ""
            setPageTitle(text)
            setLastEdited(new Date())
        }
    }

    const handleParagraphInput = () => {
        if (paragraphRef.current) {
            const text = paragraphRef.current.textContent || ""
            setParagraph(text)
            setLastEdited(new Date())
        }
    }

    const focusParagraph = () => {
        const el = paragraphRef.current
        if (!el) return

        const range = document.createRange()
        const selection = window.getSelection()

        range.selectNodeContents(el)
        range.collapse(false)

        selection?.removeAllRanges()
        selection?.addRange(range)

        el.focus()
    }

    const formatLastEdited = () => {
    if (!lastEdited) return "Ainda não editada"

    const now = new Date()
    const diffMs = now.getTime() - lastEdited.getTime()
    const diffSec = Math.floor(diffMs / 1000)
    const diffMin = Math.floor(diffSec / 60)
    const diffHr = Math.floor(diffMin / 60)
    const diffDay = Math.floor(diffHr / 24)

    if (diffMin < 1) return "Editada agora há pouco"
    if (diffHr < 1) return `Editada há ${diffMin} min`
    if (diffDay < 1) return `Editada há ${diffHr} hora${diffHr > 1 ? "s" : ""}`
    if (diffDay < 7) return `Editada há ${diffDay} dia${diffDay > 1 ? "s" : ""}`

    return `Editada em ${lastEdited.toLocaleDateString("pt-BR", {
        day: "numeric",
        month: "long",
        })}`
    }

    useEffect(() => {
    const interval = setInterval(() => {
        if (lastEdited) {
            setLastEdited(new Date(lastEdited))
        }
    }, 60000)

    return () => clearInterval(interval)
    }, [lastEdited])

    return (
        <div className="flex flex-col w-full h-auto">
            <header className="flex flex-row items-center justify-between px-[12px] py-[8px] gap-[15px]">
                <div className="flex flex-row items-center gap-[15px]">
                    <h1>
                        {pageTitle || "Nova página..."}
                    </h1>
                    <div>
                        <h2>Particular</h2>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-[15px]">
                    <h2>{formatLastEdited()}</h2>
                </div>
            </header>

            <div className={`z-[20] flex justify-start items-end py-[25px] px-[150px] w-full overflow-hidden transition-all duration-300 ease-in-out ${banner ? "h-[250px] bg-red-800" : "h-[80px] bg-transparent"}`}>
                <button onClick={() => { setBanner((prev) => {const newBanner = !prev
                    setLastEdited(new Date())
                    return newBanner
                    })}} className="w-min h-min whitespace-nowrap px-[15px] outline-none border-none transition-all duration-300 ease-in-out">{banner ? "Remover banner" : "Adicionar banner"}</button>
            </div>

            <div className={`w-full h-auto flex flex-col items-start justify-start px-[150px] relative transition-all duration-300 ease-in-out ${banner ? "pt-[50px] pb-[15px]" : "pt-[25px] pb-[15px]"}`}>
                {pageTitle === "" && (
                    <div className="absolute pointer-events-none select-none text-[40px] text-gray-400 z-0">
                        Nova página...
                    </div>
                )}

                <div
                    ref={editableRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={handleInput}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            e.preventDefault()
                            focusParagraph()
                        }
                    }}
                    className="text-[40px] max-w-[1200px] text-start focus:outline-none z-10 w-full min-h-[1em]"
                    spellCheck={false}/>
            </div>

            <div className={`w-full h-auto flex flex-col items-start justify-start px-[150px] relative transition-all duration-300 ease-in-out`}>
                {paragraph === "" && (
                    <div className="absolute pointer-events-none select-none text-[20px] text-gray-400 z-0">
                    </div>
                )}

                <div
                    ref={paragraphRef}
                    contentEditable
                    suppressContentEditableWarning
                    onInput={handleParagraphInput}
                    className="text-[20px] max-w-[1200px] text-start focus:outline-none z-10 w-full min-h-[1em]"
                    spellCheck={false}/>
            </div>
            
            <div className="flex w-full flex-row items-center justify-between pointer-events-none">
                
            </div>
        </div>
    )
}
