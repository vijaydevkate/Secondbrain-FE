import { useState } from "react"

export function CreateContentModel({open, onClose}) {
    
    return <div>

        {open && <div className="h-screen w-screen bg-slate-200 fixed opacity-70 top-0 left-0 z-10 flex justify-center items-center">
            <div className=" bg-white p-4 rounded-md shadow-md z-20">
        
                Hi there
            </div>

    </div>}
    </div>

    
}