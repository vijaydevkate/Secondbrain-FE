import type { ReactElement } from "react"

//props for the button
interface Buttonprops{
    variant: "Primary" | "Secondary",
    text: String,
    startIcon? : ReactElement
}
export function Button(props:Buttonprops) {
    return (
        <button></button>
    )
}