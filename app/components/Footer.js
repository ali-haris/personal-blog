import React from 'react'
import { ImFacebook, ImLinkedin2, ImGithub } from "react-icons/im";
import Link from 'next/link';
import Newsletter from './_child/Newsletter'

function Footer() {
    return (
        <>
            <footer className='bg-gray-50'>
                <Newsletter />
                <div className='container mx-auto flex justify-center py-12'>
                    <div className='py-5'>
                        <div className='flex gap-6 justify-center'>
                            <Link href={'/'}><ImFacebook color='#888888' /> </Link>
                            <Link href={'/'}> <ImGithub color='#888888' /> </Link>
                            <Link href={'/'}> <ImGithub color='#888888' /> </Link>
                            <Link href={'/'}>   <ImLinkedin2 color='#888888' /> </Link>
                        </div>
                        <p className='py-5 text-gray-400'>Copyright 2023 All right reserved || hello there</p>
                        <p className='text-gray-400 text-center'>Terms & Conditions</p>
                        <p className='text-gray-400 text-center'>Terms </p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer