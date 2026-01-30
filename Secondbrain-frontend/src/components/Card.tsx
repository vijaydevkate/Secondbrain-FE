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

        </div>

    )
} 