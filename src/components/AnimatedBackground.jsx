import React, { useState, useEffect } from 'react'
import { Particles } from './Particles'

const AnimatedBackground = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const gradientIntensity = Math.min(scrollY / 1000, 1)

  return (
    <>
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 0%, rgba(59, 130, 246, ${0.15 + gradientIntensity * 0.05}) 0%, rgba(30, 58, 138, ${0.08 + gradientIntensity * 0.1}) 30%, transparent 70%)`,
        }}
      >
        <div className="animate-breathing absolute inset-0" />
      </div>
      {/* Top-center breathing gradient (single semicircle at top edge) */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
              />
        <div className="top-center" />
      </div>
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 100%, rgba(124, 58, 212, 0.12) 0%, rgba(92, 51, 204, 0.06) 30%, transparent 70%)`,
        }}
      />
    </>
  )
}

export default AnimatedBackground
