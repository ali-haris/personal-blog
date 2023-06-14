import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Auther from './_child/Auther'

export default function Section4() {
    return (
        <>

            <section className='container mx-auto md:px-20 py-16'>
                <div className='grid lg:grid-cols-2'>
                    <div className='item'>
                        <h1 className='font-bold text-4xl py-12'>Business</h1>
                    </div>
                    <div className='item'>
                        <div className='flex flex-col gap-6'>

                            {/* posts */}
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}
function Post() {
    return (
        <div className='flex gap-5'>
            <div className='image flex flex-col justify-start'>
                <Link href={'/'}><Image src={"/img/heroslider.jpg"} className='rounded' width={250} height={200} alt='#' /></Link>
            </div>
            <div className='info flex justufy-center flex-col'>
                <div className='cat'>
                    <Link href={'/'} className='text-orange-600 hover:text-orange-800'>Business, Travel</Link>
                    <Link href={'/'} className='text-gray-800 hover:text-orange-600'>-June 3,2023</Link>
                </div>
                <div className='title'>
                    <Link href={'/'} className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</Link>
                </div>
                <Auther></Auther>
            </div>
        </div>
    )
}