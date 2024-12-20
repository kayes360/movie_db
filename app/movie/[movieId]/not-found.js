'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
 
export default function NotFound() {
    const pathName = usePathname()
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2>Not Found</h2>
      <p>Could not find movie with id {pathName} </p>
      <Link href="/">Return Home</Link>
    </div>
  )
}