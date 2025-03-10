import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import { i } from 'motion/react-client';


interface ButtonProps {
  handleClick: (e: any) => void;
  image: any;
  className?: string;
  min: string;
}


function Button({handleClick, image, className, min}: ButtonProps) {
  return (
    <motion.button data-value={min} onClick={handleClick} className={"absolute drop-shadow-2xl shadow-white" + className}
        initial={{scale: 0, x:200, y:-200}}
        animate={{scale: 1, x:0, y:0}}
        transition={{duration: 0.7}}
        >
          <Image src={image} width={150} height={150} alt=" Min" className="w-auto h-auto" />
        </motion.button>
  )
}

export default Button
