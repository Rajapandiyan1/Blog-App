import Link from 'next/link'
import React from 'react'

export const metadata={
  title:"About page ",
}
function page() {
  return (
    <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main>

  )
}
export default page