import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useRef } from "react"
import { BACKEND_URL } from "../Config"
import axios from "axios"

export function Signin(){
    const usernameref = useRef<HTMLInputElement>(null)
    const passwordref = useRef<HTMLInputElement>(null)

    async function signin(){
        //Reading inputvalue inpu

        const username = usernameref.current?.value
        const password = passwordref.current?.value
        const response = await axios.post(BACKEND_URL + "/api/v1/signin",{
                username,
                password
            
        })
        const jwt =response.data.token
        localStorage.setItem("token", jwt)

    }
     return(
        <>
        <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-md min-w-48 p-4">
                <Input ref={usernameref} placeholder="Username" />
                <Input ref={passwordref} placeholder="Password" />    

                <div className="flex justify-center mt-2 ">
                    <Button onClick={signin} variant="primary" text="Signin"/>               
                </div>
            </div>
        </div>
        </>
     )
}