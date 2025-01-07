'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from 'framer-motion'

const words = ['Efficiency', 'Innovation', 'Productivity', 'Growth']

export default function Hero() {
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFD700_0%,_transparent_25%)] opacity-10 animate-pulse"></div>
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FFA500_0%,_transparent_25%)] opacity-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(3)-9OX0jGjWvlEZDky3RS7x5Ggtrp3XVr.png"
              alt="Agentify Logo"
              width={500}
              height={250}
              className="mb-12 w-full max-w-[500px] h-auto"
              priority
            />
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Automate with AI
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-white/80 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your business with cutting-edge AI automation solutions that drive
            <span className="relative inline-block ml-2 w-40">
              <span className="absolute inset-0 flex items-center justify-center">
                {words.map((word, index) => (
                  <motion.span
                    key={word}
                    className="absolute"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: currentWord === index ? 1 : 0, y: currentWord === index ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </span>
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold hover:opacity-90 min-w-[200px]">
              Start Automating
            </Button>
            <Button size="lg" variant="outline" className="border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700]/10 min-w-[200px]">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

