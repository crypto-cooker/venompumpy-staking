import { useState } from 'react'

import {FC} from 'react'
import Image from "next/image";


const people = ['20 Days', '40 Days']

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

interface MyptionProps {
  selected: string;
  setSelected: any;
  point: boolean;
  setPoint: any;
}

const Myoption : FC<MyptionProps> = ({selected, setSelected, point, setPoint}) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div className='relative font-[600] flex text-[20px] cursor-pointer m-auto max-[460px]:justify-center' onClick={() => {setOpen(!open); setPoint(true)}} onMouseLeave={() => {setPoint(false);setOpen(false);}} >
      {selected}
      <Image
        className="z-[-9999] min-[460px]:mr-7 ml-5 mt-2"
        src="./icon/arrow_down.svg"
        alt="slider pannel"
        width={22.69}
        height={15.52}
        
        />
      {open && point && 
      <div className='absolute pt-[20px] left-[-30px]'>
        <div className='mt-[20px] border-[1px] bg-[#1C1C1C]/[.6]  border-white/10 backdrop-blur-md  rounded-md w-[170px] text-center py-[10px]'> 
          <p className='hover:bg-[white]/5' onClick={() => setSelected('20 Days')}>20 Days</p>
          <p className='hover:bg-[white]/5' onClick={() => setSelected('40 Days')}>40 Days</p>
        </div>
      </div>
}
    </div>
  )
}

export default Myoption