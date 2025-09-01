export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#ecf2e5' }}>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2356950f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative pt-20 pb-32 sm:pt-32 sm:pb-48 md:pt-48 md:pb-64">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-center md:text-left animate-fade-in-up">      
              <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6" style={{ color: '#56950f' }}>
                GXコンサルティング
                <span className="block" style={{ color: '#56950f' }}>サービス</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed text-gray-700">
                グリーントランスフォーメーションで<br />
                省エネ・コスト削減・職場環境向上を実現
              </p>
              
              {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" style={{ backgroundColor: '#56950f' }}>
                  サービス詳細を見る
                </button>
                <button className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base bg-transparent border-2 font-bold rounded-lg transition-all duration-200" style={{ borderColor: '#56950f', color: '#56950f' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#56950f20'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  お問い合わせ
                </button>
              </div> */}
            </div>
            
            <div className="">
              <img 
                src="/images/hero.png" 
                alt="GXコンサルティングサービス概要図" 
                className="w-full max-w-6xl mx-auto"
              />
            </div>
          </div>
        </div>
        
        {/* <div className="mt-16">
          <img 
            src="/images/hero.png" 
            alt="GXコンサルティングサービス概要図" 
            className="w-full max-w-6xl mx-auto rounded-2xl shadow-2xl"
          />
        </div> */}
      </div>
      
      {/* Large wave separator */}
      <div className="relative">
        {/* デスクトップ用の波線 */}
        <svg 
          className="hidden sm:block absolute bottom-0 left-0 w-full h-32 fill-current text-white" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,20 C360,100 480,100 720,40 C960,0 1080,0 1440,80 L1440,120 L0,120 Z" />
        </svg>
        
        {/* スマホ用の緩やかな波線 */}
        <svg 
          className="sm:hidden absolute bottom-0 left-0 w-full h-20 fill-current text-white" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,60 C360,80 720,80 1080,60 C1260,50 1350,50 1440,60 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}