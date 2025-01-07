import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-[#111111] pt-16 pb-8 border-t border-[#FFD700]/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(3)-9OX0jGjWvlEZDky3RS7x5Ggtrp3XVr.png"
              alt="Agentify Logo"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-white/70 max-w-sm">
              Transforming businesses through intelligent automation solutions powered by cutting-edge AI technology.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Company</h4>
            <nav className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-[#FFD700] transition-colors">About</Link>
              <Link href="#" className="block text-white/70 hover:text-[#FFD700] transition-colors">Services</Link>
              <Link href="#" className="block text-white/70 hover:text-[#FFD700] transition-colors">Portfolio</Link>
              <Link href="#" className="block text-white/70 hover:text-[#FFD700] transition-colors">Contact</Link>
            </nav>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Services</h4>
            <nav className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-[#FFD700] transition-colors">AI Automation</Link>
              <Link href="#" className="block text-white/70 hover:text-[#FFD700] transition-colors">Process Optimization</Link>
              <Link href="#" className="block text-white/70 hover:text-[#FFD700] transition-colors">Analytics & Insights</Link>
            </nav>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold mb-4 text-[#FFD700]">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors">
                <LinkedIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-[#FFD700] transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-white/70">info@agentify.ai</p>
          </div>
        </div>
        <div className="border-t border-[#FFD700]/10 pt-8 text-center">
          <p className="text-white/50">&copy; {new Date().getFullYear()} Agentify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

