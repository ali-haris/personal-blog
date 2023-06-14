'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Auther from './_child/Auther'
import Link from 'next/link'
import Image from 'next/image'

export default function Section3() {
    return (
        <>
            <section className='container mx-auto md:px-20 py-16'>
                <h1 className='font-bold text-4xl text-center'>Popular post</h1>

                {/* swiper */}
                <Swiper
                    slidesPerView={2}
                >
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                    <SwiperSlide>{Post()}</SwiperSlide>
                </Swiper>
            </section>
        </>
    )
}
function Post() {
    return (
        <>
            <div className='grid'>
                <div className='images'>
                    <Link href={'/'}><Image src={"/img/heroslider.jpg"} width={400} height={300} alt='#' /></Link>
                </div>
                <div className='info flex justify-center        flex-col py-4'>
                    <div className='cat'>
                        <Link href={'/'} className='text-orange-600 hover:text-orange-800'>Business, Travel</Link>
                        <Link href={'/'} className='text-gray-800 hover:text-orange-600'>-June 3,2023</Link>
                    </div>
                    <div className='title'>
                        <Link href={'/'} className='text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</Link>
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