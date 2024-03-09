import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className="bg-white shadow-lg">
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
       <Link href={'/'} className='text-decoration-none'> <h1 className="text-2xl text-decoration-none">Blog</h1></Link>
        <nav className="space-x-4">
            <Link href="/" className="text-blue-500 text-decoration-none">Home</Link>
            <Link href="/about" className="text-blue-500 text-decoration-none">About</Link>
            <Link href="/contact" className="text-blue-500 text-decoration-none">Contact</Link>
        </nav>
    </div>
</header>
  )
}

export default Header