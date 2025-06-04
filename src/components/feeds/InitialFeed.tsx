import { useRef, useState } from "react"

export default function InitialFeed() {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [text, setText] = useState("")
    const maxLength = 300

    const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current
    if (textarea) {
        textarea.style.height = "auto"
        textarea.style.height = `${textarea.scrollHeight}px`
        }
        setText(e.target.value)
    }

    return (
        <div className="flex flex-col w-full h-full">
            <header className="flex flex-row items-center px-[12px] py-[8px]">
                <h1>Pagina Inicial</h1>
            </header>
            <div className="w-full h-full flex flex-col px-[150px] max-[1536px]:px-[100px] max-[1280px]:px-[50px] py-[8px] gap-[25px] items-center justify-center">
                <div className="flex flex-row items-center gap-[15px]">
                    <img></img>
                    <h1 className="text-[30px]">Bom dia, Caiote</h1>
                </div>
                <div className="w-full px-[150px] max-[1536px]:px-[100px] max-[1280px]:px-[50px]">
                    <form className="w-full px-[25px] py-[15px] gap-[15px] bg-[var(--second-background)] rounded-[25px]" data-type="unified-composer">
                        <div className="w-full">
                            <textarea ref={textareaRef} onInput={handleInput} maxLength={maxLength} className="w-full h-full resize-none outline-none" placeholder="Pergunte ou procure por qualquer coisa no seu ambiente de trabalho..."></textarea>
                        </div>
                        <div className={`transition-all duration-300 ease-in-out ${text.length >= maxLength ? 'text-[var(--sub-text)]' : ''}`}>{text.length} / {maxLength}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}