import type { ReactElement } from "react"
interface sidebaritemprops{
    starticon?: ReactElement,
    text:String
}
export function Sidebaritem({text, starticon}:sidebaritemprops){
    return(
        <div className="flex ">
            {starticon}
            {text}
        </div>
    )
}