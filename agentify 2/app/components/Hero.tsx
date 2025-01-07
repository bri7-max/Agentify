'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from "next/image"
import { motion } from 'framer-motion'

// Particle configuration
const PARTICLE_COUNT = 50
const generateParticles = () => {
  return Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    velocity: Math.random() * 0.5 + 0.2,
  }))
}

export default function Hero() {
  const [particles, setParticles] = useState(generateParticles())

  // Update particles position
  const updateParticles = useCallback(() => {
    setParticles(prev => prev.map(particle => ({
      ...particle,
      y: particle.y - particle.velocity,
      x: particle.x + Math.sin(particle.y * 0.1) * 0.2,
      ...(particle.y < -10 ? { y: 110, x: Math.random() * 100 } : {})
    })))
  }, [])

  useEffect(() => {
    const animationFrame = setInterval(updateParticles, 50)
    return () => clearInterval(animationFrame)
  }, [updateParticles])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Particles */}
      <div className="absolute inset-0 z-[1]">
        {particles.map((particle, index) => (
          <motion.div
            key={index}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-200"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(3)-inan6lHBjphDc15vUoLPjP6HWoP9py.png"
              alt="Agentify Logo"
              width={600}
              height={300}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Text content */}
          <div className="text-center max-w-2xl mx-auto">
            <motion.h1
              className="text-4xl md:text-6xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Automate with AI
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8 text-yellow-100/90 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your business with cutting-edge AI automation solutions that drive growth, innovation, and productivity.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}

