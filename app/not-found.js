import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2>Not Found</h2>
      <p>Requested page not found</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}