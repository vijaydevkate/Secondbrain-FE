import type { ReactElement } from "react"

//props for the button
interface Buttonprops{
    variant: "primary" | "secondary",
    text: String,
    startIcon? : ReactElement
}

//Global styles
const variantsprops = {
    primary: "bg-purple-600 text-white",
    secondary:"bg-purple-200 text-purple-400"
}

export function Button({variant, text, startIcon}:Buttonprops) {
    return (
        <button className={variantsprops[variant]}></button>
    )
}