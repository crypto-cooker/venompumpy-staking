import React from 'react'
import Image from 'next/image'

const Avatar = () => {
  return (
    <div className='fixed right-[40px] top-[40px] flex items-center'>
        <p className='font-Inter text-[18px]'>Evano</p>
        <Image src='./images/avatar.svg' alt='logo' width={30} height={30} className="ml-[25px]" />
        </div>
  )
}

export default Avatar