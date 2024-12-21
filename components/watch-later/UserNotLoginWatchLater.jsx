import Link from 'next/link'
import React from 'react'

export default function UserNotLoginWatchLater() {
  return (
    
    <div id="emptyState" className=" text-center py-16">
   
    <h2 className="text-2xl font-bold text-light mb-2">
      Please Signin to view your watch list
    </h2>
    <p className="text-light/70 mb-6">
       
    </p>
    <Link
      href="/login"
      className="bg-primary text-dark px-6 py-2 rounded-full hover:bg-primary/80 transition"
    >
      Sign In 
    </Link>
  </div>
  )
}
