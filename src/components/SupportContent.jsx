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
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">OUR APPROACH</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            私たちの強み
            </h3>
            <p className="text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-12 max-w-3xl mx-auto">
            中小企業の皆様に寄り添い、<br className="hidden md:block" />
            実現可能な脱炭素化への道筋を共に描きます
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
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">専門知識と<br />豊富な実績</div>
                  <div className="text-sm sm:text-base opacity-80">中小企業に特化したGX支援の経験豊富な専門家チーム</div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">段階的な<br />導入支援</div>
                  <div className="text-sm sm:text-base opacity-80">企業の規模と状況に合わせた無理のない段階的アプローチ</div>
                </div>
              </div>
              
              <div className="group">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold mb-2">コスト効率の<br />最適化</div>
                  <div className="text-sm sm:text-base opacity-80">補助金活用と費用対効果を重視した実現可能な提案</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}