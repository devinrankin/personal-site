"use client"
import React from 'react'
import styles from './About.module.css'
import { easeIn, motion } from 'framer-motion'
import Bold from '../Bold'
import Card from './card/Card'


type Props = {}

const rightVariants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
        }
    },
    hidden: {
        opacity: 0,
        x: 50
    }
}

const leftVariants = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
        }
    },
    hidden: {
        opacity: 0,
        x: 50
    }
}

const createVariants = ( xInitial : number, xChange : number, duration : number ) => {
    return {
        visible: {
            opacity: 1,
            x: xChange,
            transition: {
                duration: duration,
                delay: 0.2,
                type: 'spring'
            }
        }, 
        hidden: {
            opacity: 0,
            x: xInitial
        }
    }
}

export default function About({}: Props) {
  return (
    <section className="min-h-screen max-h-max flex flex-col" id="about">
        <div className='p-16 sm:ml-60'>
            <Card title='about me' variants={createVariants(350, 0, 1.5)}>
                <p className='pt-4 text-typography'>
                    hello, my name is <Bold>devin</Bold>. im a <Bold>computer science</Bold> major at temple university. to learn more about me, keep <Bold>scrolling</Bold> or use the <Bold>bar</Bold> on the left side to navigate!
                </p>
            </Card>
            <Card title='interests' variants={createVariants(-350, 0, 1.5)}>
                <p className='pt-4 text-typography'>
                    currently interested in
                </p>
                <ul className='list-disc pl-8 text-typography'>
                    <li>web development</li>
                    <li>ui/ux design</li>
                    <li>computer networking</li>
                    <li>machine learning</li>
                </ul>
            </Card>
            <Card title='hobbies' variants={createVariants(200, 0, 1.5)}>
                <ul className='list-disc pl-8 pt-4 text-typography'>
                    <li>video games</li>
                    <li>anime</li>
                    <li>manga</li>
                    <li>music</li>
                    <li>cooking</li>
                </ul>
            </Card>
            <Card title='experience' variants={createVariants(-200, 0, 1.5)}>
                <ul className='list-disc pl-8 pt-4 text-typography'>
                    <li><Bold>temple university</Bold>
                        <ul className='list-disc pl-8'>
                            <li>teaching assistant - introduction to java</li>
                            <li>teaching assistant for low-level system programming</li>
                            <li>computer science peer tutor at</li>
                        </ul>
                    </li>
                    <li><Bold>coventry life settlements</Bold> - software engineer intern</li>
                </ul>
            </Card>
        </div>
    </section>
  )
}