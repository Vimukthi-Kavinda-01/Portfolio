import React from 'react'
import { motion ,useScroll, useSpring, useTransform} from "motion/react";

const ParallaxBackground = () => {
    
    const {scrollYProgress} = useScroll();
    const x = useSpring(scrollYProgress, {damping:50});
    const one3Y = useTransform(x,[0,0.5],["0%","70%"]);
    const twoX= useTransform(x,[0,0.5],["0%","-20%"]);
    const three2Y = useTransform(x,[0,0.5],["0%","30%"]);
    const four1Y = useTransform(x,[0,0.5],["0%","0%"]);
  return (
    <section 
    className='absolute inset-0 bg-black/40 '>
        <div className='relative h-screen overflow-y-hidden'>
            <div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage:"url(/assets/sky.jpg)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
            }}/>
            <motion.div className='absolute inset-0 -z-40'
            style={{
                backgroundImage:"url(/assets/mountain-3.png",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y: one3Y,
            }}/>
            <motion.div className='absolute inset-0 -z-30'
            style={{
                backgroundImage:"url(/assets/planets.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                x: twoX,
            }}/>
            <motion.div className='absolute inset-0 -z-20'
            style={{
                backgroundImage:"url(/assets/mountain-2.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y: three2Y,
            }}/>
            <motion.div className='absolute inset-0 z-10'
            style={{
                backgroundImage:"url(/assets/mountain-1.png)",
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y: four1Y,
            }}/>
        </div>
    
    </section>
  )
}

export default ParallaxBackground