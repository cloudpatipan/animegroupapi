"use client";

import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

export default function AnimeDetail() {

    const { mal_id } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    console.log(data)

    useEffect(() => {
        fetchDataDetail();
    }, [mal_id]);

    const fetchDataDetail = async () => {
        try {
            const response = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`);
            const data = await response.json();
            if (response.ok) {
                setData(data.data);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    }

    if (loading) {
        return <div className="min-h-dvh flex flex-col items-center justify-center">
            <h1 className="text-3xl">กำลังโหลด...</h1>
        </div>
    }


    return (
        <div>
            <Navbar />
            <div className="my-4 w-[90%] mx-auto">

                <div className="flex flex-col md:flex-row gap-4">

                    <div className="basis-1/4 rounded-lg overflow-hidden">
                        <img className="w-full h-full object-cover" src={data.images?.jpg?.large_image_url} alt="" />
                    </div>

                    <div className="basis-9/12">
                        <div className="border rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <h1 className="text-3xl font-semibold">{data.title}</h1>
                            </div>
                            <div className="flex items-center gap-2">
                                <div>
                                    <CiStar size={20}/>
                                </div>
                                <div>
                                    {data.score}
                                </div>
                            </div>

                        </div>

                        <div className="flex justify-between my-4 pb-2 text-sm font-semibold ">
                            <h1>สถานะ : {data.status}</h1>

                            <h1>ตอนทั้งหมด : {data.episodes} ตอน</h1>
                        </div>

                        <h2 className="text-xl font-semibold border-b pb-2 my-4">เนื้อเรื่องย่อ</h2>
                        <p className="text-justify">{data.synopsis}</p>
                        <div className="flex flex-wrap gap-2 my-4">
                            {data.genres.map((genre) => (
                                <span className="border rounded-lg px-2" key={genre.mal_id}>{genre.name}</span>
                            ))}
                        </div>
                    </div>

                </div>


                <h1 className="text-2xl font-semibold border-b pb-2 my-4">ตัวอย่าง</h1>
                <div className="rounded-lg overflow-hidden my-4">
                    <iframe className="w-full aspect-video" src={data.trailer?.embed_url} frameborder="0" />
                </div>

            </div>
        </div>
    )
}
