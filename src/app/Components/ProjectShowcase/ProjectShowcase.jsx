import React, { useEffect, useState } from 'react'
import css from './ProjectShowcase.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { imageSizes, projects } from '../../utils/data'

const ProjectShowcase = ({ project }) => {

    const [projectType, setProjectType] = useState('');
    //For some reason this is necessary to update when it should and shouldn't render 'view deployed site'
    useEffect(() => {
        setProjectType(project.type);
    }, [project])

  return (
    <>
        <a className="anchor" id="projectShowcase"></a> 
        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}    
        className={`flexCenter paddings ${css.wrapper}`}>
            <motion.div 
            className={css.container}
            variants={fadeIn("down", "tween", 0.1, 0.6)}>
                <div className={`flexCenter ${css.main}`}>
                    <div className={css.text} >
                        <motion.h1 className='primaryText'  variants={fadeIn("down", "tween", 0.2, 0.6)}>{project.title}</motion.h1>
                        <motion.p variants={fadeIn("right", "tween", 0.3, 0.6)}>{project.description}</motion.p>
                    </div>
                    <div className={`flexCenter ${css.mediaSection}`} >
                        <div className={css.links} >
                            <motion.div  variants={fadeIn("down", "tween", 0.8, 0.9)} >
                                <a  target="blank" href={project.githubSrc}>View GitHub</a>
                            </motion.div>
                            {projectType === "site" && <motion.div  variants={fadeIn("down", "tween", 0.9, 0.8)} >
                                <a target="blank" href={project.deployedSrc}>View deployed site</a>
                            </motion.div>}
                        </div>
                        <div className={css.media} >
                            <motion.img
                            variants={fadeIn("left", "tween", 0.6, 0.5)}
                            src={project.mainscreenshotSrc}
                            alt='Photo'
                            />
                        </div>
                    </div>
                </div>
                <div className={css.screenshots} >
                    {
                        project.screenshots.map((p, i) => (
                            <motion.img 
                            srcSet={p} 
                            sizes={imageSizes.projectShowcase}
                            alt={`Screenshot ${i+1}`} 
                            key={i}
                            variants={fadeIn("up", "tween", 0.6+i/15, 0.4)} />
                        ))
                    }
                </div>
            </motion.div>
        </motion.section>
    </>
  )
}

export default ProjectShowcase