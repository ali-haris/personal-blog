import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import Auther from './_child/Auther';


export default function Section1() {
    const bg = {
        background: "url('img/banner.png') no-repeat",
        backgroundPosition: "right",

    }

    return (
        <section className='py-16' style={bg}>
            <div className='container mx-auto md:px-20'>
                <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
                {Slide()}
            </div>
        </section>
    )
}



function Slide() {
    return (
        <>
            <div className='grid md:grid-cols-2'>
                <div className='image'>
                    <Link href={'/'}><Image src={"/img/heroslider.jpg"} width={400} height={400} alt='#' /></Link>
                </div>
                <div className='info flex justify-center flex-col'>
                    <div className='cat'>
                        <Link href={'/'} className='text-orange-600 hover:text-orange-800'>Business, Travel</Link>
                        <Link href={'/'} className='text-gray-800 hover:text-orange-600'>-June 3,2023</Link>
                    </div>
                    <div className='title'>
                        <Link href={'/'} className='text-2xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</Link>
                    </div>
                    <p className='text-gray-500 py-3'>
                        printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <Auther />
                </div>
            </div>
        </>
    )
}