"use client"
import React from 'react'
import styles from '../styles/About.module.css'
import { motion } from 'framer-motion'


type Props = {}

const slideIn = {
    visible: {
        opacity: 1,
        scale: 1.1,
        transition: {
            type: "spring",
            damping: 25,
            stiffness: 300,
        },
    },
    hidden: {
        scale: 0,
    }
}

export default function About({}: Props) {
  return (
    <section className={styles.about} id="about">
        <div className={styles.content}>
            <motion.div className={styles.title} variants={slideIn} initial="hidden" animate="visible">about <span className={styles.titleWord2}>me</span>
            </motion.div>
        </div>
    </section>
  )
}