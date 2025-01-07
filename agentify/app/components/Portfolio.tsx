const projects = [
  {
    title: 'Enterprise Automation Suite',
    description: 'Automated workflow system reducing manual processes by 75% for a Fortune 500 company.',
    result: 'Increased operational efficiency by 60%',
    client: 'Global Tech Solutions'
  },
  {
    title: 'AI Customer Service Platform',
    description: 'Implemented AI-powered customer service automation handling 80% of routine inquiries.',
    result: 'Reduced response time by 90%',
    client: 'Digital Retail Group'
  },
  {
    title: 'Smart Data Processing System',
    description: 'Developed an AI system for automated data processing and analysis.',
    result: 'Processed 1M+ documents monthly',
    client: 'Financial Services Corp'
  }
]

export default function Portfolio() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text">
            Success Stories
          </h2>
          <p className="text-lg text-white/80">
            See how our AI solutions have transformed businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-[#0A0A0A] p-8 rounded-xl border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[#FFD700]">{project.title}</h3>
              <p className="mb-6 text-white/70 leading-relaxed">{project.description}</p>
              <div className="p-4 bg-[#FFD700]/5 rounded-lg">
                <div className="text-[#FFA500] font-semibold mb-2">{project.result}</div>
                <p className="text-sm text-white/50">- {project.client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

