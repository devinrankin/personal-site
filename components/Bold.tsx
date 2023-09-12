import React from 'react'

type Props = {children : string}

export default function Bold({children}: Props) {
  return (
    <span className='text-primary font-black'>{children}</span>
  )
}