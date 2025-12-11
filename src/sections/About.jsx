import React, { useRef } from 'react'
import Card from "../components/Card"
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/Frameworks';

const About = () => {
    const grid2Container =  useRef();
  return <section className="c-space section-spacing">
    <h2>About Me</h2>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/*grid 1*/}
        <div className="flex items-end grid-default1-color grid-1">
            <img src="./assets/photo.jpg"
            className="absolute scale-[0.9] -right-[5rem] -top-[4rem] md:scale-[1] md:left-0 md:inset-y-10 lg:scale-[1] grayscale contrast-104 brightness-80"
            />
            <div className="z-10">
                <p className="headtext">Hi, I'm Vimukthi Kavinda</p>
                <p className="subtext">
                    Software engineering undergraduate who builds elegant, practical web applications; passionate about new technologies, collaboration, and continuous learning.
                </p>
            </div>
            <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-black" />
        </div>   
        {/*grid 2*/}
        <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full">
                <p className="flex items-end text-5xl text-gray-500">
                    CODE.CREATE.INSPIRE
                </p>
                <Card style={{rotate:"75deg",top:"30%", left:"20%"}} text={"GRASP"} containerRef={grid2Container}/>
                <Card style={{rotate:"-30deg",top:"60%", left:"45%"}} text={"SOLID"} containerRef={grid2Container}/>
                <Card style={{rotate:"90deg",bottom:"30%", left:"70%"}} text={"Design Patterns"} containerRef={grid2Container}/>
                <Card style={{rotate:"-45deg",top:"55%", left:"0%"}} image={"assets/logos/visualstudiocode.svg"} containerRef={grid2Container}/>
                <Card style={{rotate:"20deg",top:"10%", left:"38%"}} image={"assets/logos/react.svg"} containerRef={grid2Container}/>
                <Card style={{rotate:"30deg",top:"70%", left:"70%"}} image="assets/logos/vitejs.svg" containerRef={grid2Container}/>
                <Card style={{rotate:"-45deg",top:"70%", left:"25%"}} image="assets/logos/dotnet-pink.png" containerRef={grid2Container}/>
                <Card style={{rotate:"-45deg",top:"5%", left:"10%"}} image="assets/logos/wordpress.svg" containerRef={grid2Container}/>
            </div>
        </div>
        {/*grid 3*/}
        <div className="grid-black-color grid-3">
            <div className='z-10 w-[50%]'>
                <p className='headtext'>Time Zone</p>
                <p className='subtext'>I'm based in SriLanka, and open to remote work worldwide</p>
            </div>
            <figure className='absolute left-[30%] top-[10%]'>
                <Globe />
            </figure>
        </div>
        {/*grid 4*/}
        <div className="grid-special-color grid-4">
            <div className='flex flex-col items-center justify-center gap-4 size-full'>
                <p className='text-center headtext'>
                    Start a project together?
                </p>
                <CopyEmailButton />
            </div>
        </div>
        {/*grid 5*/}
        <div className="grid-default-color grid-5">
            <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
            </div>
            <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
            </div>
        </div>
    </div>
  </section>
}

export default About