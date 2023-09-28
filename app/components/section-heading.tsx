import React, { ReactNode } from 'react'

type Props = {
    children : ReactNode
}

export default function SectionHeading({ children }: Props) {
  return (
    <h2 className='text-3xl text-center font-black mb-8 text-bold-typography'>{children}</h2>
  )
}