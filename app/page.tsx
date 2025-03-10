'use client'
import Image from "next/image";
import Timer from "./components/Timer";
import { useState } from "react";
import First from "@/public/25.png";

export default function Home() {
  const [value, setValue] = useState(0);
  //  SÜRELER EKLENECEK
  // BİRAZ DAHA TATLI GÖRÜNÜŞ 
  // DEBUGGİNG - TESTİNG
  // SES
  // 5 DAKİKA ARASI
  // VE BİTİŞ
  function handleClick(e: any) {
    const newValue = Number(e.currentTarget.dataset.value);
    setValue(newValue);
  }

  return (
    <>
      <div className="overflow-hidden max-h-screen">
        <div className="">
          <h1 className="text-center text-4xl font-bold mt-24 leading-tight uppercase">Cozy Pomodoro</h1>
        </div>

        <button data-value="1" onClick={handleClick} className="absolute top-40 left-24 drop-shadow-2xl shadow-white">
          <Image src={First} width={150} height={150} alt="25 Min" className="w-auto h-auto" />
        </button>
      {value === 0 ? (
        <div className="flex justify-center items-center h-screen font-black text-4xl">
          Süre Seçiniz
        </div>
      ) : (
        <Timer customMin={value} />
      )}
      </div>
    </>
  );
}
