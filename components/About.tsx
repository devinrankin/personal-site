"use client"
import React from 'react'
import styles from '../styles/About.module.css'
import { motion } from 'framer-motion'


type Props = {}

const slideIn = {
    visible: {
        opacity: 1,
        translateX: '0vw',
    },
    hidden: {
        opacity: 0,
        translateX: '100vw',
    }
}

export default function About({}: Props) {
  return (
    <section className={styles.about} id="about">
        <div className={styles.content}>
            <motion.div className={styles.title} variants={slideIn} initial="hidden" whileInView="visible">about <span className={styles.titleWord2}>me</span>
            </motion.div>
        </div>
    </section>
  )
}