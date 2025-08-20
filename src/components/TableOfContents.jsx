export default function TableOfContents() {
  const sections = [
    { id: 'section01', title: '私たちが目指すGXとは' },
    { id: 'section02', title: 'Legacy for FutureのGXコンサルティングサービスとは' },
    { id: 'section03', title: '支援内容' },
    { id: 'section04', title: 'GXコンサルティングサービスの効果イメージ' },
    { id: 'section05', title: '事例紹介動画' },
    { id: 'section06', title: '導入事例' }
  ]

  return (
    <section className="py-12 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: '#56950f' }}>目次</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#\${section.id}`}
              className="flex py-6 p-6 rounded-lg border border-gray-200 transition-all duration-200 group hover:scale-105 relative overflow-hidden"
              style={{ 
                textDecoration: 'none',
                backgroundImage: 'url("/images/index_bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#56950f'
                e.target.style.transform = 'scale(1.05)'
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = '#e5e7eb'
                e.target.style.transform = 'scale(1)'
              }}
            >
              {/* Overlay for better text readability */}
              <div className="relative z-10 flex items-center">
                <span className="text-white transition-colors text-md leading-tight font-bold">
                  {section.title}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}