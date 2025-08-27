export default function GXVision() {
  return (
    <section id="section01" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block text-white text-sm font-bold px-6 py-2 rounded-full mb-4" style={{ backgroundColor: '#56950f' }}>
            OUR VISION
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            私たちが目指す<span style={{ color: '#56950f' }}>GX</span>とは
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              株式会社Legacy for Futureは、GX（グリーントランスフォーメーション）の実現を共に目指すパートナーとして、企業の皆さまを支援いたします。<br className="hidden md:block" />
              脱炭素経営や省エネルギー対策、環境に配慮した事業づくりに役立つ知識や最新の事例をご提供し、実務に活かせる具体的な取り組みをお伝えしています。
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              私たちは、企業の皆さまと共に持続可能な未来を築くことを使命としています。<br className="hidden md:block" />
              信頼できる情報と実践的な学びの場を通じて、GXの取り組みを一歩ずつ着実に進めてまいりましょう。
            </p>
          </div>
        </div>

        <div className="mb-16">

          <img src="/images/image01.png" alt="" className="m-auto" />
        </div>

        {/* <div className="mb-16">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative p-12 lg:p-16" style={{ backgroundColor: '#56950f' }}>
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative z-10 h-full flex flex-col justify-center text-white">
                  <div className="mb-8">
                    <svg className="w-16 h-16 mb-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"/>
                      <path d="M9.307 16.573A9.026 9.026 0 007 14.935V10.42l1.818.78a3 3 0 002.364 0l5.508-2.361A11.026 11.026 0 0117 12.76a1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold mb-4">ミライズのノウハウで</h3>
                  <p className="text-xl opacity-90">お客さまにあった最適なプランをご提案</p>
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span className="text-sm">豊富な実績と経験</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span className="text-sm">最新技術の活用</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                      <span className="text-sm">継続的なサポート</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-12 lg:p-16">
                <h4 className="text-2xl font-bold text-gray-900 mb-8">3つの柱で実現する価値</h4>
                <div className="space-y-8">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow" style={{ backgroundColor: '#56950f' }}>
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-gray-900 mb-2">省エネ</h5>
                        <p className="text-gray-600">エネルギー効率の最適化により、運用コストを大幅に削減</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow" style={{ backgroundColor: '#56950f' }}>
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-gray-900 mb-2">電化</h5>
                        <p className="text-gray-600">クリーンエネルギーへの転換で環境負荷を低減</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow" style={{ backgroundColor: '#56950f' }}>
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h5 className="text-lg font-bold text-gray-900 mb-2">CN <span className="text-sm font-normal text-gray-500">(注3)</span></h5>
                        <p className="text-gray-600">カーボンニュートラル実現で持続可能な未来へ</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="bg-gray-100 rounded-xl p-6 text-sm text-gray-600 space-y-2">
          <p>（注1）2019年度累計実績</p>
          <p>（注2）Quality（品質）、Cost（コスト）、Delivery（納期）の頭文字で開発・生産の評価指標の一つ</p>
          <p>（注3）Carbon Neutrality の頭文字で温室効果ガスの排出量と吸収量を均衡させること</p>
        </div>
      </div>
    </section>
  )
}