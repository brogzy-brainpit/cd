import GridColumn from '@/layout/GridColumn'
import GridRow from '@/layout/GridRow'
import Section from '@/layout/Section'
import Heading1 from '@/typography/Heading1'
import Paragraph from '@/typography/Paragraph'
import React from 'react'
import Button from './Button'
import CustomButton from './CustomButton'
import Image from 'next/image'
import Heading2 from '@/typography/Heading2'
import { motion } from 'framer-motion'
import SlideUpText from '@/effects/SlideUpText'
import { Plane, Plus } from 'lucide-react'
import LandingVideo from './LandingVideo'
import hero from '../../public/images/hhero.png'
import Logo from './Logo'

function Section1({preLoaderOut}) {
  const ease = [0.9, 0, 0.1, 1];

   const textSlide={
    initial:(i)=>({
      y:70,
      opacity:0,

    }),
     enter:(i)=>({
      y:0,
      opacity:1,
      transition:{duration:1.4,delay:i==1?0.1:0, ease:[0.76, 0, 0.24, 1]},
    }),
    exit:(i)=>({
      y:70,
      opacity:0,

    }),
  }

  const MotionImage=motion(Image)
  return (
    <div className='bg-brand-accent min-h-svh flex items-end relative w-full h-svh'>
      
<div className='flex items-center justify-center w-full flex-col'>
  <div className='w-full'>
    <motion.div initial={{scaleX:0}} animate={{scaleX:preLoaderOut?1:0}} transition={{delay:1.4,duration:1,ease}} exit={{scaleX:0}} className='w-full h-[0.12em] bg-brand-secondary'></motion.div>
    <div className='w-full text-center overflow-hidden text-heading1 leading-[1.4] font-custom2 uppercase text-brand-secondary'>
      <motion.h2 initial={{y:'100%'}} animate={{y:preLoaderOut?'0%':'100%'}} transition={{delay:1.3,duration:1,ease}} exit={{y:'100%'}}>
        the vision
      </motion.h2>
      
      </div>
  </div>
  <div className='w-full'>
    <motion.div initial={{scaleX:0}} animate={{scaleX:preLoaderOut?1:0}} transition={{delay:1.2,duration:1,ease}} exit={{scaleX:0}} className='w-full h-[0.12em] bg-brand-secondary'></motion.div>

    <div className='w-full text-center overflow-hidden text-heading1 leading-[1.4] font-custom2 uppercase text-brand-secondary'>
      <motion.h2 initial={{y:'100%'}} animate={{y:preLoaderOut?'0%':'100%'}} transition={{delay:1.3,duration:1,ease}} exit={{y:'100%'}}>
       is
      </motion.h2>
      
      </div>
  </div>
  <div className='w-full'>
    <motion.div initial={{scaleX:0}} animate={{scaleX:preLoaderOut?1:0}} transition={{delay:1,duration:1,ease}} exit={{scaleX:0}} className='w-full h-[0.12em] bg-brand-secondary'></motion.div>
   <div className='w-full text-center overflow-hidden text-heading1 leading-[1.4] font-custom2 uppercase text-brand-secondary'>
      <motion.h2 initial={{y:'100%'}} animate={{y:preLoaderOut?'0%':'100%'}} transition={{delay:1.1,duration:1,ease}} exit={{y:'100%'}}>
       coaching good
      </motion.h2>
      
      </div>
  </div>
</div>
    </div>
  )
}

export default Section1