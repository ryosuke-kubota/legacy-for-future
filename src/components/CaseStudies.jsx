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
      image: "manufacturing"
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
      image: "logistics"
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
      image: "food"
    }
  ]

  return (
    <section id="section06" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            導入事例
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            様々な業界のお客さまにGXコンサルティングサービスをご利用いただき、<br />
            確実な成果を実現しています
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`grid md:grid-cols-2 gap-8 items-center \${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={`\${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="bg-gradient-to-br from-blue-500 to-green-500 h-64 rounded-2xl flex items-center justify-center text-white relative overflow-hidden">
                  <div className="text-center z-10">
                    <h3 className="text-2xl font-bold mb-2">{study.company}</h3>
                    <p className="text-lg opacity-90">{study.industry}</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                </div>
              </div>

              <div className={`\${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">課題</h4>
                    <p className="text-gray-700">{study.challenge}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">ソリューション</h4>
                    <p className="text-gray-700">{study.solution}</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <h4 className="text-xl font-bold text-gray-900 mb-4">導入効果</h4>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600 mb-1">
                          {study.results.co2Reduction}
                        </div>
                        <div className="text-sm text-gray-600">CO2削減</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600 mb-1">
                          {study.results.costSaving}
                        </div>
                        <div className="text-sm text-gray-600">コスト削減</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600 mb-1">
                          {study.results.period}
                        </div>
                        <div className="text-sm text-gray-600">導入期間</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              お客さまの成功事例が示す確かな効果
            </h3>
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-blue-600 mb-1">平均30%</div>
                <div className="text-sm text-gray-600">CO2削減効果</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-green-600 mb-1">年間1,000万円</div>
                <div className="text-sm text-gray-600">平均コスト削減</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-purple-600 mb-1">6ヶ月</div>
                <div className="text-sm text-gray-600">平均導入期間</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-2xl font-bold text-orange-600 mb-1">100%</div>
                <div className="text-sm text-gray-600">目標達成率</div>
              </div>
            </div>

            <p className="text-gray-700 mb-6">
              業種や規模を問わず、お客さまの現状に最適化されたソリューションで確実な成果を実現しています
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                事例の詳細資料をダウンロード
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                お客さまの声を見る
                <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}