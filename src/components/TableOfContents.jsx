export default function TableOfContents() {
  const sections = [
    { id: 'section01', title: '私たちが目指すGXとは' },
    { id: 'section02', title: '中部電力ミライズのGXコンサルティングサービスとは' },
    { id: 'section03', title: '支援内容' },
    { id: 'section04', title: 'GXコンサルティングサービスの効果イメージ' },
    { id: 'section05', title: '事例紹介動画' },
    { id: 'section06', title: '導入事例' }
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">目次</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((section, index) => (
            <a
              key={section.id}
              href={`#\${section.id}`}
              className="block p-4 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-gray-200 transition-all duration-200 group"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 group-hover:bg-blue-700 transition-colors">
                  {index + 1}
                </div>
                <span className="text-gray-700 group-hover:text-blue-700 transition-colors text-sm leading-tight">
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