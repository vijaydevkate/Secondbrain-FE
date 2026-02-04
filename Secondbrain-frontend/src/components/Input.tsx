interface Inputprops{
    placeholder: string,
    ref?: any
   
}

export function Input({placeholder, ref}:Inputprops){
    return (
        <div>
            <input type="text" placeholder={placeholder} ref={ref} className="border rounded-md p-1 m-2"/>
        </div>

    )
}