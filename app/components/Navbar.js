import React from 'react'

const Navbar = () => {
    return (
        <>
            <header className='bg-gray-50'>
                <div className='xl:container xl:mx-auto flex flex-col item-center sm:flex-row sm:justify-between text-center py-3'>
                    <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
                        <input type='text' className='input-text focus: outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500' placeholder='Seach...' />
                    </div>
                    <div className='shrink w-80 sm:order-2'>
                        <a>Design</a>
                    </div>
                    <div className='w-96order-3 flex justify-center'>
                        <div className='flex gap-6'>
                            <a>Facebook</a>
                            <a>Github</a>
                            <a>LinkedInn</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar