export default function SupportContent() {
  return (
    <section id="section03" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0" style={{ backgroundColor: '#56950f' }}></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 100 0 L 0 0 0 100' fill='none' stroke='white' stroke-width='0.5' opacity='0.1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative px-4 py-8 sm:py-12 md:py-16 text-white text-center">
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-6 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">SUPPORT SERVICES</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            支援内容
            </h3>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-12 max-w-3xl mx-auto">
            お客さまの課題解決に向けて、<br className="hidden md:block" />
            包括的なGXコンサルティングサービスを提供します
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2.172a1 1 0 011.414 0l3.414 3.414a1.414 1.414 0 01.172.586V10a1 1 0 01-.293.707l-7 7a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l7-7A1 1 0 0110 2.172zM11 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      <path d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-2-2a1 1 0 111.414-1.414L10 15.586l5.293-5.293a1 1 0 011.414 0z" />
                    </svg>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">新設・改修<br />プロジェクト推進</div>
                  <div className="text-sm sm:text-base opacity-80">プロジェクト体制構築、全体工程管理など</div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">カーボンニュートラル<br />設備導入</div>
                  <div className="text-sm sm:text-base opacity-80">全体最適システムの構築、高効率設備の選定など</div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">エンジニアリング<br />パートナー連携</div>
                  <div className="text-sm sm:text-base opacity-80">協力企業の選定、必要な情報の提供・収集</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}