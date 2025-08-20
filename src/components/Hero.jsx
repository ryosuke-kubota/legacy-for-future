export default function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#ecf2e5' }}>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2356950f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in-up">      
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#56950f' }}>
                GXコンサルティング
                <span className="block" style={{ color: '#56950f' }}>サービス</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-gray-700">
                グリーントランスフォーメーションで<br />
                省エネ・コスト削減・職場環境向上を実現
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200" style={{ backgroundColor: '#56950f' }}>
                  サービス詳細を見る
                </button>
                <button className="px-8 py-4 bg-transparent border-2 font-bold rounded-lg transition-all duration-200" style={{ borderColor: '#56950f', color: '#56950f' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#56950f20'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                  お問い合わせ
                </button>
              </div>
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
      
      {/* Modern wave separator */}
      <div className="relative">
        <svg 
          className="absolute bottom-0 left-0 w-full h-20 fill-current text-white" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  )
}