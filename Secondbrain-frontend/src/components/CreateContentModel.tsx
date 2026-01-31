import { CrossIcon } from "../Icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

export function CreateContentModel({open, onClose}) {
    
    return <div>

        {open && <div className="h-screen w-screen bg-slate-200 fixed opacity-70 top-0 left-0 z-10 flex justify-center items-center">
            <div className=" bg-white p-4 rounded-md shadow-md z-20">
                <div className="flex justify-end cursor-pointer">
                    <CrossIcon/>
                </div>
                <div>
                    <Input placeholder= "Title"></Input>
                    <Input placeholder= "Link"></Input>
                </div>
                <div className="flex justify-center">
                    <Button variant= "primary" text="Submit"></Button>

                </div>
                
            </div>

    </div>}
    </div>

    
}