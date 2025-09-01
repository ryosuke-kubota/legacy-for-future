export default function ServiceOverview() {
  return (
    <section id="section02" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-6 rounded-full mb-4" style={{ backgroundColor: '#56950f' }}>
            SERVICE OVERVIEW
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Legacy for Futureの
            <span className="block mt-2" style={{ color: '#56950f' }}>
              GXコンサルティングサービス
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            従来の課題を解決し、最適なエネルギーシステムで<br className="hidden md:block" />
            カーボンニュートラル実現をサポートします
          </p>
        </div>

        <div>
          <img src="/images/image02.png" alt="" className="m-auto"/>
        </div>

        {/* ポイントセクション */}
        <div className="mt-12 sm:mt-16 md:mt-20 space-y-6 sm:space-y-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex items-start flex-col md:flex-row">
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="px-3 py-2 mb-4 md:mb-0 sm:px-5 sm:py-3 rounded-lg text-white font-bold text-base sm:text-lg flex items-center justify-center md:aspect-square" style={{ backgroundColor: '#56950f' }}>
                  POINT 1
                </div>
              </div>
              <div className="ml-4 sm:ml-6 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#56950f' }}>
                  電化技術やソリューションノウハウ
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  当社は2000年の電力自由化以降、中部エリアを中心とするお客さまに向け、生産設備やユーティリティ設備の省エネ診断や電化技術の開発といったソリューション活動を実施してきました。このノウハウを最大限活用し、お客さまの環境目標・生産情報などを踏まえた最適なシステムを構築します。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex items-start flex-col md:flex-row">
              <div className="flex-shrink-0 w-full md:w-auto">
                <div className="px-3 py-2 mb-4 md:mb-0 sm:px-5 sm:py-3 rounded-lg text-white font-bold text-base sm:text-lg flex items-center justify-center md:aspect-square" style={{ backgroundColor: '#56950f' }}>
                  POINT 2
                </div>
              </div>
              <div className="ml-4 sm:ml-6 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{ color: '#56950f' }}>
                  発注者支援型コンサルティングサービス
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  事業の構想から発注・導入・運用まで発注者（お客さま）のプロジェクトメンバーの一員となって支援します。<br/>
                  工程管理・体制構築・技術支援など、お客さまの要望に応じた幅広い支援が可能です。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 to-orange-400"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">従来の課題</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  過去の設備仕様に基づく設計により、仕様のミスマッチによるエネルギーの過剰使用や、必要以上の投資コストが発生
                </p>
              </div>
            </div>

            <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-cyan-400"></div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-bold text-gray-900">当社のソリューション</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  現状に即した最適なシステムを構築し、CO2排出量・投資コストを最小限に抑えたカーボンニュートラル工場を実現
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">比較で見る価値提供</h3>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400 to-orange-400 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">従来の課題</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700">過去の設備仕様に基づく設計</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700">エネルギーの過剰使用</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="text-gray-700">必要以上の投資コスト</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl blur opacity-25"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">GXソリューション</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">現状に即した最適システム</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">CO2排出量の最小化</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">投資コストの最適化</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}