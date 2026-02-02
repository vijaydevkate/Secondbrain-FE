import { Input } from "../components/Input"
import { Button } from "../components/Button"

export function Signin(){
     return(
        <>
        <div className="h-screen w-screen bg-gray-300 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-md min-w-48 p-4">
                <Input placeholder="Username" />
                <Input placeholder="Password" />    

                <div className="flex justify-center mt-2 ">
                    <Button variant="primary" text="Signin"/>               
                </div>
            </div>
        </div>
        </>
     )
}