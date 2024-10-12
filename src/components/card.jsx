import Link from "next/link";
import { PiChatTextThin } from "react-icons/pi";

export default function Card({ imgUrl, caption, title, height, weight, link, children }) {

    return (
        <div>
            <Link href={link}>
                <div className={`relative ${height} overflow-hidden rounded-lg group`}>
                    <img className="w-full h-full obeject-cover" src={imgUrl} alt={caption} />
                    <div className="absolute text-white text-lg bg-black/40 h-full w-full flex flex-col items-center justify-center -bottom-20 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <p>รายละเอียด</p>
                        <PiChatTextThin size={40}/>
                    </div>
                </div>
            </Link>
            <p className="mx-auto truncate my-4">{title}</p>
            {children}
        </div >
    )
}
