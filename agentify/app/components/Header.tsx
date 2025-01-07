'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed w-full bg-[#0A0A0A] border-b border-[#FFD700]/10 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(3)-9OX0jGjWvlEZDky3RS7x5Ggtrp3XVr.png"
              alt="Agentify Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Home</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">About</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Services</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Portfolio</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Contact</Link>
            <Button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </nav>
          <button 
            className="md:hidden text-white/90 hover:text-[#FFD700] transition-colors" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-[#0A0A0A] border-b border-[#FFD700]/10">
          <nav className="flex flex-col items-center py-6 space-y-6">
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Home</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">About</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Services</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Portfolio</Link>
            <Link href="#" className="text-white/90 hover:text-[#FFD700] transition-colors">Contact</Link>
            <Button className="bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold hover:opacity-90 transition-opacity w-48">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

