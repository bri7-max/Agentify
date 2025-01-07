import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/about-us-image.jpg"
                alt="About Agentify"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              About Agentify
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              At Agentify, we're passionate about harnessing the power of AI to revolutionize business processes. Our team of experts combines cutting-edge technology with industry insights to deliver tailored automation solutions that drive efficiency and growth.
            </p>
            <p className="text-gray-300 mb-6 text-lg">
              With a focus on innovation and a commitment to excellence, we help businesses of all sizes unlock their full potential through intelligent automation. Our solutions are designed to adapt and scale, ensuring that your business stays ahead in an ever-evolving digital landscape.
            </p>
            <p className="text-gray-300 text-lg">
              Partner with Agentify and experience the transformative power of AI-driven automation for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

