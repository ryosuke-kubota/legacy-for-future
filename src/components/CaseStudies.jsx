export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      company: "製造業A社様",
      industry: "自動車部品製造",
      challenge: "工場全体のエネルギー効率化",
      solution: "省エネ設備導入とエネルギーマネジメントシステム構築",
      results: {
        co2Reduction: "30%削減",
        costSaving: "年間1,200万円削減",
        period: "6ヶ月"
      },
      icon: "🏭",
      color: "blue"
    },
    {
      id: 2,
      company: "物流業B社様",
      industry: "物流・倉庫業",
      challenge: "倉庫設備の電化とコスト削減",
      solution: "LED照明導入と空調システム最適化",
      results: {
        co2Reduction: "25%削減",
        costSaving: "年間800万円削減",
        period: "4ヶ月"
      },
      icon: "📦",
      color: "green"
    },
    {
      id: 3,
      company: "食品加工C社様",
      industry: "食品製造業",
      challenge: "冷凍・冷蔵設備の省エネ化",
      solution: "高効率冷凍機導入とIoTによる運転最適化",
      results: {
        co2Reduction: "35%削減",
        costSaving: "年間1,500万円削減",
        period: "8ヶ月"
      },
      icon: "🍱",
      color: "purple"
    }
  ]

  const getGradientColors = (color) => {
    return '#56950f'
  }

  const getBgColors = (color) => {
    const backgrounds = {
      blue: 'bg-green-50',
      green: 'bg-green-50',
      purple: 'bg-green-50'
    }
    return backgrounds[color] || 'bg-green-50'
  }

  return (
    <section id="section06" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block text-white text-sm font-bold px-6 py-2 rounded-full mb-4" style={{ backgroundColor: '#56950f' }}>
            CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            導入事例
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            様々な業界のお客さまにGXコンサルティングサービスをご利用いただき、
            確実な成果を実現しています
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={study.id} className="relative">
              <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl p-12 shadow-2xl overflow-hidden" style={{ backgroundColor: '#56950f' }}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full translate-y-32 -translate-x-32"></div>
                    
                    <div className="relative z-10 text-white">
                      <div className="text-6xl mb-6">{study.icon}</div>
                      <h3 className="text-3xl font-bold mb-3">{study.company}</h3>
                      <p className="text-xl opacity-90 mb-6">{study.industry}</p>
                      
                      <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/20">
                        <div>
                          <div className="text-3xl font-bold text-yellow-300">{study.results.co2Reduction.split('削減')[0]}</div>
                          <div className="text-sm opacity-80">CO2削減</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-yellow-300">{study.results.period}</div>
                          <div className="text-sm opacity-80">導入期間</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-yellow-300">{study.results.costSaving.split('年間')[1].split('削減')[0]}</div>
                          <div className="text-sm opacity-80">年間削減額</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div className={`${getBgColors(study.color)} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#56950f' }}>
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">課題</h4>
                      </div>
                      <p className="text-gray-700 text-lg">{study.challenge}</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: '#56950f' }}>
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900">ソリューション</h4>
                      </div>
                      <p className="text-gray-700 text-lg">{study.solution}</p>
                    </div>

                    <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                      <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        導入効果
                      </h4>
                      <div className="grid grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-yellow-400 mb-1">
                            {study.results.co2Reduction}
                          </div>
                          <div className="text-sm opacity-80">CO2削減</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-400 mb-1">
                            {study.results.costSaving.split('年間')[1]}
                          </div>
                          <div className="text-sm opacity-80">年間コスト削減</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-400 mb-1">
                            {study.results.period}
                          </div>
                          <div className="text-sm opacity-80">導入期間</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0" style={{ backgroundColor: '#56950f' }}></div>
          <div className="relative z-10 p-12 md:p-16 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              お客さまの成功事例が示す確かな効果
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">平均30%</div>
                <div className="text-sm opacity-90">CO2削減効果</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">1,000万円</div>
                <div className="text-sm opacity-90">平均年間削減額</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">6ヶ月</div>
                <div className="text-sm opacity-90">平均導入期間</div>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-sm opacity-90">目標達成率</div>
              </div>
            </div>

            <p className="text-center text-lg opacity-90 mb-10 max-w-3xl mx-auto">
              業種や規模を問わず、お客さまの現状に最適化されたソリューションで確実な成果を実現しています
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105" style={{ color: '#56950f' }}>
                事例の詳細資料をダウンロード
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-white hover:bg-white/10 transition-all duration-200">
                お客さまの声を見る
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}