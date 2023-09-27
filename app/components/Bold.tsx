import React from 'react'

type Props = {children : string}

export default function Bold({children}: Props) {
  return (
    <span className='text-bold-typography font-black'>{children}</span>
  )
}