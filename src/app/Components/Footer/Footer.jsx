import React from 'react'
import css from './Footer.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerContainer } from '../../utils/motion'
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <motion.section 
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}>
            <div className={css.left}>
                <span className="primaryText">Lets make something<br/>great together!</span>
                <span className="primaryText">Start by<a href='mailto:bennetthumphrey98@gmail.com'> saying hi</a></span>
            </div>
            <div className={css.right}>
                <div className={css.info}>
                    <span className="secondaryText">Info</span>
                    <p>Victoria, BC, Canada</p>
                </div>
                <div className={css.email}>
                    <a href="mailto:bennetthumphrey98@gmail.com">
                        Email: bennetthumphrey98@gmail.com
                    </a>
                </div>
                <div className={css.insta}>
                    <a href="https://www.instagram.com/bennett.humphrey/" target='blank'>
                        <BsInstagram className={css.icon} />
                        Instagram
                    </a>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer