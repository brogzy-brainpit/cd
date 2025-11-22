import {AnimatePresence} from 'framer-motion';
import SmoothScroll from "@/providers/Lenis";
import Header from "@/components/Header";
import Section1 from "@/components/Section1";
import Preloader from "@/components/Preloader";
import { useEffect, useState } from "react";
import Preloader2 from '@/components/Preloader2';

function PageContent() {
   const [isLoading,setIsLoading]=useState(true)
   const [isLoading2,setIsLoading2]=useState(true)
   const [preLoaderOut,setPreLoaderOut]=useState(false)

  useEffect(()=>{

   const timer=  setTimeout(() => {
    setIsLoading(false)
    document.body.style.cursor="default"
    window.scrollTo({top:0})
    setPreLoaderOut(true)
    setTimeout(() => {
      setIsLoading2(false)
    }, 1000);

    }, 6400);
    return ()=>clearTimeout(timer)
  },[])
  return (
    <SmoothScroll>

    <AnimatePresence  mode="wait" onExitComplete={()=>{setPreLoaderOut(true)}}>
    {isLoading &&  <Preloader2 key={'preloader'}/>}
     {/* <Preloader key={'preloader'}/> */}
    </AnimatePresence>
    <AnimatePresence mode="wait">
  {isLoading2 ? (
    <Preloader key="pre" />
  ) : (
    <Header key="head" preLoaderOut={preLoaderOut} />
  )}
</AnimatePresence>

      {/* <Header preLoaderOut={preLoaderOut}/> */}
      <Section1 preLoaderOut={preLoaderOut}/>
      <div className='h-screen bg-neutral-800'>

      </div>

    </SmoothScroll>
           
    
  );
}

export default function Home() {
  return (
    <main>
        <PageContent />
    </main>
  );
}
