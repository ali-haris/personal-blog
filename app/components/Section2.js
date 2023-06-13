import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import Auther from './_child/Auther';


export default function Section2() {
    return (
        <>
            <section className='container mx-auto md:px-20 py-10'>
                <h1 className='font-bold text-4xl text-center'>Latest post</h1>

                {/* grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-14'>

                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                    {Post()}
                </div>
            </section>
        </>
    )
}
function Post() {
    return (
        <>
            <div className='item'>
                <div className='images'>
                    <Link href={'/'}><Image src={"/img/heroslider.jpg"} className='rounded' width={300} height={250} alt='#' /></Link>
                </div>
                <div className='info flex justify-center        flex-col py-4'>
                    <div className='cat'>
                        <Link href={'/'} className='text-orange-600 hover:text-orange-800'>Business, Travel</Link>
                        <Link href={'/'} className='text-gray-800 hover:text-orange-600'>-June 3,2023</Link>
                    </div>
                    <div className='title'>
                        <Link href={'/'} className='text-xl font-bold text-gray-800 hover:text-gray-600'>Your most unhappy customers are your greatest source of learning</Link>
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

