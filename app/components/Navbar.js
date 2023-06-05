import React from 'react'

import { ImFacebook, ImLinkedin2, ImGithub } from "react-icons/im";


const Navbar = () => {
    return (
        <>
            <header className='bg-gray-50'>
                <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3'>
                    <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-3 sm:py-0'>
                        <input type='text' className='input-text h-35 focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='Seach...' />
                    </div>
                    <div className='shrink w-80 sm:order-2 py-3'>
                        <a className='font-bold uppercase text-2xl'>Design</a>
                    </div>
                    <div className='w-96 order-3 flex justify-center py-3'>
                        <div className='flex gap-6'>
                            <a><ImFacebook color='#888888' /> </a>
                            <a><ImGithub color='#888888' /> </a>
                            <a><ImLinkedin2 color='#888888' /> </a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar