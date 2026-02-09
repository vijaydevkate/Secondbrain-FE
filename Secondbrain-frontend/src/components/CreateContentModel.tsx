import { useRef } from "react"
import { CrossIcon } from "../Icons/CrossIcon"
import { Button } from "./Button"
import { useState } from "react"
import { Input } from "./Input"
import { BACKEND_URL } from "../Config"
import axios from "axios"

export const ContentType = {
  Youtube: "youtube",
  Twitter: "twitter",
};

export function CreateContentModel({open, onClose}) {
    const titleRef = useRef<HTMLInputElement>(null)
    const linkRef = useRef<HTMLInputElement>(null)
    const [type, setType] = useState(ContentType.Youtube)

    async function addcontent(){
        const title = titleRef.current?.value;
        const link = linkRef.current?.value

       await axios.post(`${BACKEND_URL}/api/v1/content`,{
        title,
        type, 
        link
       },{
        headers:{
            "Authorization": localStorage.getItem("token")
        }
       })
        
    }
    
    return <div>

        {open && <div className="h-screen w-screen bg-slate-200 fixed opacity-70 top-0 left-0 z-10 flex justify-center items-center">
            <div className=" bg-white p-4 rounded-md shadow-md z-20">
                <div className="flex justify-end cursor-pointer" >
                    <div onClick={onClose}>
                      <CrossIcon/>
                    </div>
                </div>
                <div>
                    <Input ref={titleRef} placeholder= "Title"></Input>
                    <Input ref={linkRef} placeholder= "Link"></Input>
                </div>
                <div>
                    <h1>Type</h1>
                    <div className="flex gap-1 p-1">
                        <Button text="Youtube" variant={type === ContentType.Youtube ? "primary" : "secondary"} onClick={()=> {setType(ContentType.Youtube)}}></Button>
                        <Button text="Twitter" variant={type === ContentType.Twitter ? "primary" : "secondary"} onClick={()=>{setType(ContentType.Twitter)}}></Button>
                        </div>
                </div>
                <div className="flex justify-center">
                    <Button onClick={addcontent} variant= "primary" text="Submit"></Button>

                </div>
                
            </div>

    </div>}
    </div>

    
}