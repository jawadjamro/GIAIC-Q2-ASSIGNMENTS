import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4 bg-gray-700 text-white '>
        <h1>
            <Link href="/">
                My Website
            </Link>
        </h1>
        <ul className='flex space-x-4'>
            <li><Link href="/">Home</Link> </li>
            <li><Link href="/components/about">About</Link> </li>
            <li><Link href="/components/contact">Contact</Link> </li>
        </ul>
        <h2>
            CART
        </h2>
    </div>
  )
}

export default Navbar