import React, { useState } from 'react'
import css from './Header.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion'


const Header = () => {

    const [openModal, setOpenModal] = useState(false)


  return (
    <section className={`paddings ${css.wrapper}`}>
        <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`} >
            <div className={css.upperElements} >
                <motion.span 
                variants={fadeIn("right", "tween", 0.2, 1)}
                className='primaryText' >Hello, <br/> I'm Ben.</motion.span>
                <motion.span 
                variants={fadeIn("left", "tween", 0.4, 1)}
                className='secondaryText' >Let me help you <br/> build your brand</motion.span>
            </div>

            <motion.div 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className={css.person} >
                <motion.img 
                variants={slideIn("up", "tween", 0.5, 1.3)} 
                src="./profile.webp" 
                alt="Ben" />
            </motion.div>

            <a className={css.email} href="mailto:bennetthumphrey98@gmail.com">bennetthumphrey98@gmail.com</a>

            <div className={css.lowerElements} >
                <motion.div 
                variants={fadeIn("right", "tween", 0.3, 1)}
                className={css.experience} >
                    <div className='primaryText' >2</div>
                    <div className='secondaryText' >
                        <div>Years</div>
                        <div>Experience</div>
                    </div>
                </motion.div>
                <motion.div
                variants={fadeIn("left", "tween", 0.5, 1)}
                className={css.certificate}>
                    {/* <img src="./certificate.png" alt="Certificate" /> */}
                    <div className='flex flex-col justify-center items-center'>
                            <h3>Current rate</h3>
                        <span>$32CAD / $25USD per hour</span>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    </section>
  )
}

export default Header