import { Bot, Cpu, LineChart, Zap, Layers, Shield } from 'lucide-react'

const services = [
  {
    icon: <Bot size={48} className="text-gray-800" />,
    title: 'AI Automation',
    description: 'Streamline your workflows with intelligent automation solutions powered by cutting-edge AI technology.'
  },
  {
    icon: <Cpu size={48} className="text-gray-800" />,
    title: 'Process Optimization',
    description: 'Enhance efficiency and reduce costs with smart process automation and optimization.'
  },
  {
    icon: <LineChart size={48} className="text-gray-800" />,
    title: 'Analytics & Insights',
    description: 'Gain valuable insights from your data with AI-powered analytics and reporting tools.'
  },
  {
    icon: <Zap size={48} className="text-gray-800" />,
    title: 'Predictive Maintenance',
    description: 'Implement AI-driven predictive maintenance to reduce downtime and extend equipment life.'
  },
  {
    icon: <Layers size={48} className="text-gray-800" />,
    title: 'AI Integration',
    description: 'Seamlessly integrate AI capabilities into your existing systems and workflows.'
  },
  {
    icon: <Shield size={48} className="text-gray-800" />,
    title: 'AI Security Solutions',
    description: 'Enhance your cybersecurity with AI-powered threat detection and prevention systems.'
  }
]

export default function Services() {
  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">
            Our Services
          </h2>
          <p className="text-lg text-gray-300">
            Discover how our AI-powered solutions can transform your business operations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-800 p-8 rounded-2xl border border-yellow-400/30 hover:border-yellow-400/70 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 rounded-full bg-gray-200">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-medium mb-4 text-yellow-300">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

