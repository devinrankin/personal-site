"use client"
import React from 'react'
import styles from '../About.module.css'
import { easeIn, motion } from 'framer-motion'
import Bold from '../Bold'
import Card from '../card/Card'


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
    <section className={styles.about} id="about">
        <div className='p-16 sm:ml-60'>
            <Card title='about me' variants={createVariants(350, 0, 1.5)}>
                <p className='pt-4 text-secondary'>
                    hello, my name is <Bold>devin</Bold>. im a <Bold>computer science</Bold> major at temple university. to learn more about me, keep <Bold>scrolling</Bold> or use the <Bold>bar</Bold> on the left side to navigate!
                </p>
            </Card>
            <Card title='interests' variants={createVariants(-350, 0, 1.5)}>
                <p className='pt-4 text-secondary'>
                    currently interested in
                </p>
                <ul className='list-disc pl-8 text-secondary'>
                    <li>web development</li>
                    <li>ui/ux design</li>
                    <li>computer networking</li>
                    <li>machine learning</li>
                </ul>
            </Card>
            <Card title='hobbies' variants={createVariants(200, 0, 1.5)}>
                <ul className='list-disc pl-8 pt-4 text-secondary'>
                    <li>video games</li>
                    <li>anime</li>
                    <li>manga</li>
                    <li>music</li>
                    <li>cooking</li>
                </ul>
            </Card>
            <Card title='experience' variants={createVariants(-200, 0, 1.5)}>
                <ul className='list-disc pl-8 pt-4 text-secondary'>
                    <li><Bold>temple university</Bold></li>
                    <li>software engineer intern at <Bold>coventry</Bold></li>
                    <li>peer tutor at <Bold>temple university</Bold></li>
                    <li>teaching assistant for low-level system programming at <Bold>temple university</Bold></li>
                </ul>
            </Card>
    
        </div>
            
    </section>
  )
}

//<Card className="mt-8 ml-60 absolute right-60"></Card>