import RegistrationForm from '@/components/auth/RegistrationForm'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div className="w-full max-w-md bg-black/70 rounded-lg p-8 shadow-xl">
    <div className="text-center">
      <h1 className="text-white text-3xl font-bold mb-6">Create Your Account</h1>

       <RegistrationForm/>

      <div className="mt-6 text-moviedb-text-gray">
        Already have an account?
        <Link href="/login" className="ms-3 text-white hover:underline">Sign in</Link>
      </div>
    </div>
  </div>
  )
}