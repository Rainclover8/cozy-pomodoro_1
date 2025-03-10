'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';  
import { AnimatedCircularProgressBar } from './magicui/animated-circular-progress-bar';

export default function Timer({ customMin }: { customMin: number }) {
  const [minutes, setMinutes] = useState(customMin);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [audio] = useState(new Audio('/alarm1.mp3'));

  useEffect(() => {
    let interval: any;

    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            setIsActive(false);
            audio.play().catch(err => console.error("Ses çalma hatası:", err));
            return;
          } else {
            setMinutes(prevMinutes => prevMinutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(prevSeconds => prevSeconds - 1);
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const startTimer = () => setIsActive(true);

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(customMin);
    setSeconds(0);
    audio.pause();
    audio.currentTime = 0;
  };

  const totalSeconds = customMin * 60; 
  const remainingSeconds = minutes * 60 + seconds; 
  const progressValue = ((totalSeconds - remainingSeconds) / totalSeconds) * 100; 

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.h1 className="text-4xl font-bold bg-amber-200 p-5 rounded-2xl text-black"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </motion.h1>

      <motion.div className="mt-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={startTimer}>
          Başlat
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={resetTimer}>
          Sıfırla
        </button>
      </motion.div>

     <div className="mt-3">
     <AnimatedCircularProgressBar 
        max={100} 
        min={0} 
        value={progressValue}
        gaugePrimaryColor='#30545e' 
        gaugeSecondaryColor='#dcc331' 
      />
     </div>
    </div>
  );
}
