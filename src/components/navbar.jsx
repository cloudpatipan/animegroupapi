import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

export default function Navbar({ search, onChange }) {
    return (
        <nav className="py-4 border">
            <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-4 md:gap-0 items-center justify-between">

                <div>
                    <ul className="flex gap-4">
                        <li>
                            <Link href={'/'}>
                                <button className="border p-2 rounded-lg hover:bg-black hover:text-white">
                                    หน้าหลัก
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/'}>
                                <button className="border p-2 rounded-lg hover:bg-black hover:text-white">
                                    เกี่ยวกับ
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="relative">
                    <input type="text" placeholder="ค้นหา"
                        className=" w-full pl-8 appearance-none bg-transparent focus:outline-none border rounded-lg"
                        value={search} onChange={onChange}
                    />
                    <IoSearchOutline className="absolute top-[0.25rem] left-2" size={20} />
                </div>
            </div>


        </nav >
    )
}
