import React from 'react'
import '../app/globals.css'
import Navbar from '@/components/Navbar'

type Props = {}

export default function about({}: Props) {
  return (
    <div>
        <Navbar></Navbar>
        <div className='rounded-full flex bg-white border-2 border-white m-10'></div>
    </div>
  )
}