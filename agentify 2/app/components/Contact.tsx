import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-lg text-white/80">
            Ready to transform your business with AI automation? Contact us today to discuss how our solutions can help you achieve your goals.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-gray-900 border-yellow-400/20 focus:border-yellow-400/50 rounded-xl h-12"
              />
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-900 border-yellow-400/20 focus:border-yellow-400/50 rounded-xl h-12"
              />
            </div>
            <Input 
              type="text" 
              placeholder="Subject" 
              className="bg-gray-900 border-yellow-400/20 focus:border-yellow-400/50 rounded-xl h-12"
            />
            <Textarea 
              placeholder="Your Message" 
              className="bg-gray-900 border-yellow-400/20 focus:border-yellow-400/50 rounded-xl min-h-[150px]"
            />
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold hover:opacity-90 h-12 text-lg rounded-xl"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

