export default function TableOfContents() {
  const sections = [
    { id: 'section01', title: '私たちが目指すGXとは' },
    { id: 'section02', title: 'Legacy for FutureのGXコンサルティングサービスとは' },
    { id: 'section03', title: '支援内容' },
    { id: 'section04', title: 'GXコンサルティングサービスの効果イメージ' },
    { id: 'section05', title: '事例紹介動画' },
    { id: 'section06', title: '導入事例' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80 // ヘッダーの高さを考慮
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center" style={{ color: '#56950f' }}>目次</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex py-4 px-4 sm:py-6 sm:p-6 rounded-lg transition-all duration-200 group hover:scale-105 hover:border-green-500 hover:shadow-lg relative overflow-hidden cursor-pointer bg-white min-h-[60px]"
              style={{ 
                backgroundImage: 'url("/images/index_bg.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay for better text readability */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-200"></div>
              
              <div className="relative z-10 flex items-center justify-between w-full h-full">
                <span className="text-white transition-colors text-base sm:text-base md:text-md leading-tight font-bold group-hover:text-yellow-100">
                  {section.title}
                </span>
                <div className="ml-4 flex items-center">
                  {/* クリック可能であることを示すアイコン */}
                  <svg 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-yellow-100 transition-all duration-200 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}