import { Bot, Cpu, LineChart } from 'lucide-react'

const services = [
  {
    icon: <Bot size={48} className="text-[#FFD700]" />,
    title: 'AI Automation',
    description: 'Streamline your workflows with intelligent automation solutions powered by cutting-edge AI technology.'
  },
  {
    icon: <Cpu size={48} className="text-[#FFD700]" />,
    title: 'Process Optimization',
    description: 'Enhance efficiency and reduce costs with smart process automation and optimization.'
  },
  {
    icon: <LineChart size={48} className="text-[#FFD700]" />,
    title: 'Analytics & Insights',
    description: 'Gain valuable insights from your data with AI-powered analytics and reporting tools.'
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-lg text-white/80">
            Discover how our AI-powered solutions can transform your business operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#0A0A0A]/50 p-8 rounded-xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-lg bg-[#FFD700]/5">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-[#FFD700]">{service.title}</h3>
              <p className="text-white/70 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

