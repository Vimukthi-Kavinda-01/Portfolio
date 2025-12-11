import { OrbitControls } from "@react-three/drei"
import HeroText from "../components/HeroText"
import { ThreeDModel } from "../components/ThreeDModel"
import { Canvas } from "@react-three/fiber"
// Lottie visibility is handled with Tailwind responsive classes (show on mobile, hide on md+)
import { Particles } from "../components/Particles";

const Hero = () => {
  
  return (
    
    <section className=" flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">

        <HeroText />
        <figure className="absolute inset-0"
        style={{
          width:"100vw" ,
          height:"100vw",
        }}>
          <Canvas camera={{position:[0 , 1 , 3]}}>
          </Canvas>
        </figure>

        {/* Lottie: red network globe on the right side of the hero section.
            Visible on small screens (mobile) and hidden on medium+ devices (tablets/desktops). */}
        <div className="absolute center-0 top-1/2 z-10 pointer-events-none w-80 h-80 sm:w-72 sm:h-72 md:hidden lg:block lg:w-96 lg:h-96 lg:top-1/3 lg:right-1/10">
            {/* Replace the src below with any Lottie JSON URL you prefer. */}
            <lottie-player
              src="assets/Coding.json"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />

            {/* Fallback: inline SVG red network globe (shows if Lottie fails) */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-0" aria-hidden>
                <defs>
                  <radialGradient id="g" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#ff5a5f" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#ff2d2d" stopOpacity="0.12" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="100" cy="100" r="90" fill="url(#g)" />
                <g stroke="#ff7b7b" strokeWidth="1.8" strokeOpacity="0.5" fill="none">
                  <path d="M20 100c30-40 120-40 160 0" />
                  <path d="M20 120c30 10 120 10 160 0" />
                  <path d="M60 20c20 30 40 120 0 160" />
                </g>
              </svg>
            </div>
          </div>
    </section>
  )
}

export default Hero