import { FlipWords } from "./flipWords.jsx";
import { motion } from "motion/react";


const HeroText = () => {
    const words = ["Clean", "Modern", "Scalable"];
    const varients = {
        hidden: {opacity:0, x:-50},
        visible: {opacity:1, x:0}
    }
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/*desktop*/}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 
            className="text-4xl font-medium"
            variants={varients}
            initial="hidden"
            animate="visible"
            transition={{delay:1}}
            >
                Hi I'm Vimukthi
            </motion.h1>
            <div className="flex flex-col items-start">
                <motion.p 
                className="text-5xl font-medium text-neutral-300"
                variants={varients}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}
                >
                    A Software Engineering Undergraduate
                </motion.p><br></br>
                <motion.p 
                className="text-4xl font-black text-neutral-300"
                variants={varients}
                initial="hidden"
                animate="visible"
                transition={{delay:1.5}}>Writing</motion.p>
                <motion.div
                variants={varients}
                initial="hidden"
                animate="visible"
                transition={{delay:1.8}}
                >
                    <FlipWords words={words} className="text-8xl font-black text-white" /></motion.div>
                <motion.p 
                className="text-4xl font-medium text-neutral-300"
                variants={varients}
                initial="hidden"
                animate="visible"
                transition={{delay:2.1}}
                >code that speaks for itself..</motion.p>
            </div>
        </div>
        {/*mobile*/}
        <div className="flex- flex-col space-y-6 md:hidden">
            <motion.p 
            className="flex-4xl font-medium"
            variants={varients}
            initial="hidden"
            animate="visible"
            transition={{delay:1}}
            >
                Hi,I'm Vimukthi
            </motion.p>
            <div>
                <motion.p 
                className="text-4xl font-black text-neutral-300"
                variants={varients}
                initial="hidden"
                animate="visible"
                transition={{delay:1.2}}>Writing</motion.p>
                <motion.div
                variants={varients}
                initial="hidden"
                animate="visible"
                transition={{delay:1.5}}>
                    <FlipWords words={words} className="text-8xl font-black text-white" />
                </motion.div>
                <motion.p 
                className="text-4xl font-black text-neutral-300"
                variants={varients}
                initial="hidden"
                animate="visible"
                transition={{delay:1.8}}>Code that speak for itself.</motion.p>
            </div>
        </div>
    </div>
  )
}

export default HeroText