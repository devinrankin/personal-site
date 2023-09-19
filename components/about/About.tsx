"use client"
import React from 'react'
import styles from '../../styles/About.module.css'
import { easeIn, motion } from 'framer-motion'
import Bold from '../Bold'


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
        <div className='sm:ml-60'>
            <motion.div 
                className='rounded-xl shadow-2xl flex flex-col bg-secondary-bg text-secondary-color text-xl px-8 py-4 md:w-1/2'
                variants={createVariants(350, 0, 1.5)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <h1 className='pt-4 text-primary font-black'>
                    about me
                </h1>
                <p className='pt-4 text-secondary'>
                    hello, my name is <Bold>devin</Bold>. im a <Bold>computer science</Bold> major at temple university. to learn more about me, keep <Bold>scrolling</Bold> or use the <Bold>bar</Bold> on the left side to navigate!
                </p>
            </motion.div>
            <motion.div 
                className='rounded-xl shadow-2xl flex flex-col bg-secondary-bg text-secondary-color text-xl px-8 py-4 mt-12 md:ml-32 md:w-1/2'
                variants={createVariants(-350, 0, 0.7)}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true }}>
                <h1 className='pt-4 text-primary font-black'>
                    interests
                </h1>
                <p className='pt-4 text-secondary'>
                    currently interested in
                </p>
                <ul className='list-disc pl-8 text-secondary'>
                    <li>web development</li>
                    <li>machine learning</li>
                    <li>user experience design</li>
                    <li>cloud computing</li>
                </ul>
            </motion.div>
        </div>
            
    </section>
  )
}

//<Card className="mt-8 ml-60 absolute right-60"></Card>