import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram, GitlabIcon as GitHub } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-yellow-400/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20(3)-9OX0jGjWvlEZDky3RS7x5Ggtrp3XVr.png"
              alt="Agentify Logo"
              width={180}
              height={78}
              className="mb-4"
            />
            <p className="text-white/70 max-w-sm">
              Agentify is at the forefront of AI automation, transforming businesses through intelligent solutions. Our cutting-edge technology drives efficiency, innovation, and growth across industries.
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">Company</h4>
            <nav className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">About Us</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Our Team</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Careers</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Press</Link>
            </nav>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">Services</h4>
            <nav className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">AI Automation</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Process Optimization</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Analytics & Insights</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">AI Integration</Link>
            </nav>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">Resources</h4>
            <nav className="space-y-3">
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Blog</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Case Studies</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Whitepapers</Link>
              <Link href="#" className="block text-white/70 hover:text-yellow-400 transition-colors">Documentation</Link>
            </nav>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold mb-4 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">Connect</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                <LinkedIn className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-white/70 hover:text-yellow-400 transition-colors">
                <GitHub className="h-6 w-6" />
              </a>
            </div>
            <p className="text-white/70">info@agentify.ai</p>
            <p className="text-white/70">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-yellow-400/10 pt-8 text-center">
          <p className="text-white/50">&copy; {new Date().getFullYear()} Agentify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

