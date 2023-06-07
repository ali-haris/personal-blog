import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Auther() {
    return (
        <>
            <div className='auther flex py-5'>
                <Image src={'/img/auther.png'} className='rounded-full' alt='auther-image' width={60} height={60} />
                <div className='flex flex-col justify-center px-4'>
                    <Link href={'/'} className='text-md font-bold text-gray-800 hover:text-gray-600'>Flying High</Link>
                    <span className='text-sm text-gray-500'>CEO & Founder</span>
                </div>
            </div>
        </>
    )
}
