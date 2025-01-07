'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(3)-inan6lHBjphDc15vUoLPjP6HWoP9py.png"
              alt="Agentify Logo"
              width={180}
              height={78}
              className="h-[78px] w-auto"
              priority
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">About</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Services</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Blog</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </nav>
          <button 
            className="md:hidden text-white hover:text-yellow-400 transition-colors" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-black/90 backdrop-blur-sm">
          <nav className="flex flex-col items-center py-6 space-y-6">
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Home</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">About</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Services</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Blog</Link>
            <Link href="#" className="text-white hover:text-yellow-400 transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

