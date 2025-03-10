'use client';

import { useEffect, useState } from 'react';

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
            console.log("Süre bitti");
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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold bg-amber-200 p-5 rounded-2xl text-black">
        {`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
      </h1>
      <div className="mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded mr-2" onClick={startTimer}>
          Başlat
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={resetTimer}>
          Sıfırla
        </button>
      </div>
    </div>
  );
}
