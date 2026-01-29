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

const buttondefaultstyles = "px-4 py-2 rounded-md flex items-center cursor-pointer"

export function Button({variant, text, startIcon}:Buttonprops) {
    return (
        <button className={`${variantsprops[variant]} ${buttondefaultstyles}`}>
           <div className="pr-1">
            {startIcon}
           </div>
            {text}
        </button>
    )
}