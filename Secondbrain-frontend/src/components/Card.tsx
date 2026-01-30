import { ShareIcon } from '../Icons/ShareIcon'

export function Card (){
    return (
        <div className="max-w-72 p-4 border-gray-300 shadow-md rounded-md">
        
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-1 text-sm'>
                    <div className=''>
                        <ShareIcon/>
                    </div>
                    Project Ideas
                </div>

                <div className='flex gap-1'>
                    <ShareIcon/>
                    <ShareIcon/>

                </div>
            </div>
            <div className='pt-2'>
                 <iframe className='w-full' src="https://www.youtube.com/embed/9Np9rP666x8?si=j20Gx63lNapnaViy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            </div>


        </div>

    )
} 