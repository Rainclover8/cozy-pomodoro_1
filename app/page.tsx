'use client'
import Timer from "./components/Timer";
import { useState } from "react";
import First from "@/public/25.png";
import Second from "@/public/15.png";
import Third from "@/public/5.png";
import Button from "./components/Button";
import { motion } from "framer-motion";
export default function Home() {
  const [value, setValue] = useState(0);

  function handleClick(e: any) {
    const newValue = Number(e.currentTarget.dataset.value);
    setValue(newValue);
  }
// Eklemeler gerekiyor 

  return (
    <>
      <div className="overflow-hidden max-h-screen">
        <div className="">
          <motion.h1
            className="text-center text-6xl font-extrabold mt-24 uppercase bg-gradient-to-t from-fuchsia-700 to-indigo-500 bg-clip-text text-transparent mainText
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 4 }}
          >Cozy Pomodoro</motion.h1>
        </div>
      
        <Button image={First} min="25" handleClick={handleClick} />


        <Button image={Second} className=" md:right-20 right-10 md:top-45 top-74" min="15" handleClick={handleClick} />

        <Button image={Third} className=" md:top-1/3 md:left-1/3 left-20 top-85 " min="5" handleClick={handleClick} />


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
