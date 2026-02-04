import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useRef } from "react"

export function Signup(){
    const usernameref = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)

    function signup(){
        //Reading inputvalue input
        const username = usernameref.current?.value
        const password = passwordref.current?.value
    }
     return(
        <>
        <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-md min-w-48 p-4">
                <Input ref={usernameref} placeholder="Username" />
                <Input ref={passwordref} placeholder="Password" />    

                <div className="flex justify-center mt-2 ">
                    <Button onClick={signup} variant="primary" text="Signup"/>               
                </div>
            </div>
        </div>
        </>
     )
}