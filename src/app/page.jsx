"use client";

import Card from "@/components/card";
import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";

export default function Home() {

  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
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

  const filtered = data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()));


  return (
    <div>
      <Navbar search={search} onChange={(e) => setSearch(e.target.value)} />

      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl my-4 border-l-4 pl-4 border-black">อัพเดททุกวัน</h1>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
          {filtered.length > 0 ? (
            filtered.map((item) => (
              <Card key={item.mal_id}
                height={'h-[14rem]  md:h-[18rem]'}
                imgUrl={item.images.jpg.image_url}
                title={item.title}
                link={`/anime/${item.mal_id}`}
              >
                <div className="flex items-center gap-2">
                  <div>
                    <CiStar size={20} />
                  </div>
                  <div>
                    {item.score}
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="my-4 col-span-6 flex flex-col items-center justify-center">
              <h1 className="text-3xl font-semibold">ไม่มีข้อมูล</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
