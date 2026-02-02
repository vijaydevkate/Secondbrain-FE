import { Sidebaritem } from "./Sidebaritem"
import { TwitterIcon } from "../Icons/TwitterIcon"
import { YoutubeIcon } from "../Icons/YoutubeIcon"
export function Sidebar(){
    return (
        <div className="h-screen w-72 bg-white shadow-lg  fixed pl-4 pt-4">
            <Sidebaritem starticon={<TwitterIcon/>} text="Twitter"/>
            <Sidebaritem starticon={<YoutubeIcon/>} text= "Youtube"/>
        </div>
    )
}