import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
        <header className='flex justify-between items-center py-5 px-8 shadow-sm shadow-gray-500'>
            <div className="">
                <h1 className='text-2xl font-bold'>Products</h1>
            </div>
            <nav>
                <ul className='flex gap-5'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header
