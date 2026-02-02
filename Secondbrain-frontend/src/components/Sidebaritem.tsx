import type { ReactElement } from "react"
interface sidebaritemprops{
    starticon?: ReactElement,
    text:String
}
export function Sidebaritem({text, starticon}:sidebaritemprops){
    return(
        <div className="flex items-center">
            <div className="p-2">
                {starticon}
            </div>

            <div className="p-2">
                {text}
            </div>

        </div>
    )
}