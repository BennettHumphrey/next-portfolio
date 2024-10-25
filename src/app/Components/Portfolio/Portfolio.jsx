import React, { useState } from 'react'
import css from './Portfolio.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../../utils/motion'
import { projects } from '../../utils/data'
import ProjectShowcase from '../ProjectShowcase/ProjectShowcase'
import MoreWorks from '../MoreWorks/MoreWorks'

const Portfolio = () => {

    const [selectedProject, setSelectedProject] = useState(null);
    const [showMoreWorks, setShowMoreWorks] = useState(false);

    const showcaseProjects = projects.filter(x => x.showcase === true);
    const extraProjects = projects.filter(x => x.showcase === false);

  return (
    <>
        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{once: false, amount: 0.25}}
        className={`paddings ${css.wrapper}`}>
            <a className="anchor" id="portfolio"></a>
            <div className={`flexCenter innerWidth ${css.container}`}>
                <div className={`flexCenter ${css.heading}`}>
                    <div>
                        <span className='primaryText' >Electrical Templates</span>
                        {/* <p style={{marginTop: "10px"}} >Great solutions</p> */}
                    </div>
                    <a 
                    className="secondaryText"
                    href="#moreWorks"
                    onClick={() => {
                        setShowMoreWorks(true);
                    }}
                    onTouchEnd={() => {
                        setShowMoreWorks(true);
                    }}
                    >Explore Other Projects</a>
                </div>
    
                <div className={`flexCenter ${css.showcase}`}>
                    {
                        showcaseProjects.map((p, i) => (
                            <a 
                            key={i} 
                            href="#projectShowcase">
                                <motion.img
                                src={p.mainscreenshotSrc}
                                variants={fadeIn("up", "tween", 0.1+i/3, 0.6)}
                                alt={`Project ${i} screenshot`}
                                onClick={() => {
                                    setSelectedProject(p);
                                }}
                                onTouchEnd={() => {
                                    setSelectedProject(p);
                                }}
                                />
                            </a>
                        ))
                    }
                </div>
    
            </div>
        </motion.section>
        {showMoreWorks && <MoreWorks extraProjects={extraProjects} setSelectedProject={setSelectedProject} />}
        {selectedProject && <ProjectShowcase project={selectedProject} />}
    </>
  )
}

export default Portfolio