import React from 'react'
import SectionHeading from '../section-heading'
import { skillsData } from '@/lib/data'

type Props = {}

export default function Skills({}: Props) {
  return (
    <section className="flex flex-col items-center text-center text-typography">
        <SectionHeading>my skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg max-w-[53rem] mb-28">
            {
                skillsData.map((skill, index) => (
                    <li className="border border-white/[0.1] rounded-xl px-5 py-3" key={index}>{skill}</li>
                ))}
        </ul>
    </section>
  )
}