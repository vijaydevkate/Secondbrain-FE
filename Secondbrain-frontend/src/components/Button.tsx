import type { ReactElement } from "react"

//props for the button
interface Buttonprops{
    variant: "Primary" | "Secondary",
    text: String,
    startIcon? : ReactElement
}

export function Button({variant, text, startIcon}:Buttonprops) {
    return (
        <button></button>
    )
}