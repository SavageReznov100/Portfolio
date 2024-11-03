import Navbar from '@/components/Navbar'
import Bentilo from "@/components/Bentilo";
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
   <main className='fullcontainer'>
    <Navbar/>
    <Bentilo/>
   </main>
  )
}

export default page