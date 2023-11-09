import React from 'react'
import { FC } from 'react'

interface props {
    w: number,
    h: number
}

const Card : FC<props> = (props) => {
  return (
    <div className={`w-[100%] mt-[5vh] pt-[] opacity-40 flex justify-center ` }>
        <div className={`w-[${props.w}px] max-[1440px]:w-[80%] bg-[#1C1C1C] rounded-[16px] mt-[70px] flex justify-center`}>
            <input type='text' disabled className='z-[2] opacity-100 bg-[url("/icon/btcicon.svg")] bg-no-repeat bg-left mt-[96px] w-[75%] h-[70px] rounded-[10px] text-right hover:bg-[#474747]'/>
        </div>
    </div>
  )
}

//

export default Card