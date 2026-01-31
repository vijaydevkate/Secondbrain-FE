interface Inputprops{
    placeholder: string
   
}

export function Input({placeholder, }:Inputprops){
    return (
        <div>
            <input type="text" placeholder={placeholder} className="border rounded-md p-1 m-2"/>
        </div>

    )
}