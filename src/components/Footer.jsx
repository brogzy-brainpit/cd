import SlideUpText from '@/effects/SlideUpText'
import React from 'react'
import CustomBtn from './CustomButton'
import { Facebook, FacebookIcon, Instagram, Linkedin } from 'lucide-react'
import SlideUpElement from '@/effects/SlideUpElement'
import Logo from './Logo'
import ScatterText from './ScatterText'
import Heading1 from '@/typography/Heading1'

function footer() {
  const texts=[
    {text:'aircraft maintainanc',
      url:'#',background:'pink'
    }, {text:' maintainance & tracking',
      url:'#',background:'#059669'
    }, {text:'aircraft & tracking',
      url:'#',background:'orange'
    }
  ]
  return (
    <ScatterText>
    <div className='bg-brand-secondary w-full h-full relative  flex gap-2 flex-col '>
<Heading1 className={'text-white'}>
  hello footer
</Heading1>
   
      </div>

    </ScatterText>
  )
}

export default footer