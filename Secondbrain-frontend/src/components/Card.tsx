import { ShareIcon } from '../Icons/ShareIcon'

interface cardprops{
    title: string
    link: string,
    type: "twitter" | "youtube"
}

export function Card ({title, link, type}: cardprops){
    return (
        <div className="max-w-72 p-4 border-gray-300 shadow-md rounded-md">
        
            <div className="flex items-center justify-between">
                <div className='flex items-center gap-1 text-sm'>
                    <div className=''>
                        <ShareIcon/>
                    </div>
                    {title}
                </div>. 

                <div className='flex gap-1'>
                    <a href= {link} target = "_blank">
                        <ShareIcon/>
                    </a>
                    <ShareIcon/>

                </div>
            </div>
            <div className='pt-2'>
                {/* Youtube embeded link*/}
                { type === "youtube" &&  <iframe className='w-full rounded-lg' src="https://www.youtube.com/embed/9Np9rP666x8?si=j20Gx63lNapnaViy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}

                {/* Twitter embeded link*/}
                {type === "twitter" && <blockquote className="twitter-tweet">
                <a href="https://twitter.com/username/status/807811447862468608"></a> 
                </blockquote>}

            </div>


        </div>

    )
} 