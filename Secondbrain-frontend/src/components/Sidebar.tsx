import { Sidebaritem } from "./Sidebaritem"
import { TwitterIcon } from "../Icons/TwitterIcon"
export function Sidebar(){
    return (
        <div className="h-screen w-72 bg-white shadow-lg absolute fixed">
            <Sidebaritem starticon={<TwitterIcon/>} text="Twitter"/>
        </div>
    )
}