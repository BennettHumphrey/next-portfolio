import { imageSizes, MoreWorksProps, moreWorksSliderSettings, Project } from '@/app/data'
import { Carousel } from 'flowbite-react'
import React, { FC } from 'react'



const MoreWorks:FC<MoreWorksProps> = ({ extraProjects, setSelectedProject }) => {
  return (
    <>
      <a className="block relative -top-[100px] invisible" id="moreWorks"></a>
      <section className="px-6 py-6 sm:p-16 md:py-8 w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col">
          <div className="relative">
            <Carousel {...moreWorksSliderSettings} className="my-0 mx-[-7px] overflow-y-visible pt-[3vw] pb-[3vw]">
              {extraProjects.map((p:Project, i:number) => (
                <a key={i} href="#projectShowcase" className="no-underline text-inherit">
                  <div
                    className="p-4 bg-white rounded-[20px] relative h-[15vw] mb-4 flex justify-center"
                    onClick={() => setSelectedProject(p)}
                    onTouchEnd={() => setSelectedProject(p)}
                  >
                    <img
                      srcSet={p.mainscreenshotSrc}
                      sizes={imageSizes.moreWorks}
                      alt={`Screenshot ${i + 1}`}
                      className="mx-auto mb-[0.3rem] rounded-[10%] relative shadow-sm h-[10vw] w-[12vw] lg:h-[15vw] lg:w-[18vw] md:h-[20vw] md:w-[24vw] sm:h-[25vw] sm:w-[30vw]"
                    />
                    <div className="flex justify-center items-center">
                      <p className="text-center text-[0.9rem]">{p.tech}</p>
                    </div>
                  </div>
                </a>
              ))}
            </Carousel>
          </div>
        </div>
      </section>
    </>
  )
}

export default MoreWorks