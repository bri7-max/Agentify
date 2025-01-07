const blogPosts = [
  {
    title: 'The Future of AI in Business Automation',
    excerpt: 'Explore how AI is reshaping business processes and driving unprecedented efficiency.',
    date: 'June 15, 2023',
    author: 'John Doe'
  },
  {
    title: 'Case Study: AI-Driven Customer Service Revolution',
    excerpt: 'Learn how our AI solution transformed a company\'s customer service, reducing response times by 90%.',
    date: 'May 28, 2023',
    author: 'Jane Smith'
  },
  {
    title: 'Ethical Considerations in AI Automation',
    excerpt: 'Delve into the ethical implications of AI automation and how businesses can navigate them responsibly.',
    date: 'May 10, 2023',
    author: 'Alex Johnson'
  }
]

export default function Blog() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">
            Blog
          </h2>
          <p className="text-lg text-white/80">
            Insights and updates from the world of AI automation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-2xl font-medium mb-4 bg-gradient-to-r from-yellow-400 to-white text-transparent bg-clip-text">{post.title}</h3>
              <p className="mb-6 text-white/70 leading-relaxed">{post.excerpt}</p>
              <div className="flex justify-between items-center text-sm text-white/50">
                <span>{post.date}</span>
                <span>By {post.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

