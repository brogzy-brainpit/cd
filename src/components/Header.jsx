
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from "../../public/images/logo.svg"
import Image from 'next/image.js'
import Button from './Button'
import {AnimatePresence, motion} from 'framer-motion'
import { Umbrella } from 'lucide-react'
import Logo from './Logo'
import Magnetic from '@/common/Magnetic'



function Header() {
  const [isMenuOpen,setIsMenuOpen]=useState(false)
  const ease = [0.9, 0, 0.1, 1];

const [MenuAktiv,setMenuAktiv]=useState(false)
const logo={
    initial: { opacity: 1,},
    enter: {
      opacity:0,
      transition:{
         type:'tween',
         duration: 0.65, 
            ease: [.215,.61,.355,1],
            opacity: { duration: 0.35}
      }

    },
     exit:{ opacity: 1},
  };
  return (
        <div className={`transition-all mix-blend-difference duration-300 p-4 fixed  w-full h-ful  z-preloader  bgred-700`}>
<div className=' bg-slate-5 relative w-full flex h-ful justify-center items-center py-4 container mx-auto p-'>
<div layout className='bg-red-60 h-ful self-start pt-2' >
  <Magnetic>

 <h2 className="flex" >
 <motion.span 
              className="text-[2rem] uppercas leading-[1.6] font-custom2 text-white font-bold "
               layoutId="d"
  transition={{
    duration:1,
    layout: {
      duration: 1,
      ease,
    },
  }}>
                c
              </motion.span>


 <motion.span 
              className="text-[2rem] uppercas leading-[1.6] font-custom2 text-white font-bold "
               layoutId="a-4"
  transition={{
    duration:1,
    layout: {
      duration: 1,
      ease,
    },
  }}>
                d
              </motion.span>
</h2>
  </Magnetic>

  </div>

 {/* <Magnetic> */}
   <div onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='absolute cursor-pointer -translate-y-1/2 top-[50%] -translate-x-1/2 right-2 bg-white w-10 h-10 rounded-full flex items-center justify-center'>
    <div className={`burger w-full flex flex-col items-center justify-center ${isMenuOpen?'activeBurger ':''}`}>

    </div>
  </div>
 {/* </Magnetic> */}
  </div>
 


</div>
  )
}


export default Header