'use client'
import Image from "next/image";
import Timer from "./components/Timer";
import { useState } from "react";
import First from "@/public/25.png";
import Second from "@/public/15.png";
import Third from "@/public/5.png";
import Button from "./components/Button";
import { motion } from "framer-motion";
export default function Home() {
  const [value, setValue] = useState(0);
  //  SÜRELER EKLENECEK
  // BİRAZ DAHA TATLI GÖRÜNÜŞ 
  // DEBUGGİNG - TESTİNG
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
          <motion.h1
            className="text-center text-6xl font-extrabold mt-24 uppercase bg-gradient-to-b from-fuchsia-700 border-t-indigo-500 bg-clip-text text-transparent "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >Cozy Pomodoro</motion.h1>
        </div>

        <Button image={First} className="" min="4" handleClick={handleClick} />


        <Button image={Second} className=" md:right-20 right-10 top-45" min="15" handleClick={handleClick} />

        <Button image={Third} className=" top-1/3 left-1/3" min="5" handleClick={handleClick} />


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
