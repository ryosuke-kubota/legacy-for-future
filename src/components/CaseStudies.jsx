export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      logoImage: "/images/nabtesco-logo.png", // ロゴ画像パス
      company: "ナブテスコ株式会社さま",
      description: "精密機械加工工場の空調改善に向けた取り組み"
    },
    {
      id: 2,
      logoImage: "/images/meiji-logo.png", // ロゴ画像パス
      company: "Meiji Seika ファルマ株式会社さま",
      description: "30年ぶりとなるペニシリン原薬製造を実現"
    }
  ]

  return (
    <section id="section06" className="py-32" style={{ backgroundColor: '#f0f4e8' }}>
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

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* 企業ロゴサムネイル */}
                <div className="h-48 bg-white p-8 flex items-center justify-center border-b border-gray-100">
                  <img 
                    src={study.logoImage} 
                    alt={`${study.company}のロゴ`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <div class="text-center">
                            <svg class="w-16 h-16 text-gray-300 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                            </svg>
                            <p class="text-gray-400 text-sm">ロゴ画像</p>
                          </div>
                        </div>
                      `;
                    }}
                  />
                </div>
                
                <div className="p-8">
                  
                  {/* サービス名 */}
                  <div className="text-sm text-gray-600 mb-4">GXコンサルティングサービス</div>
                  
                  {/* 企業名 */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {study.company}
                  </h3>
                  
                  {/* 説明文 */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-6">
                    {study.description}
                  </p>
                  
                  {/* 詳しく見るボタン */}
                  {/* <a href="#" className="inline-flex items-center px-6 py-3 border-2 rounded-full font-medium hover:bg-gray-50 transition-colors duration-200" style={{ borderColor: '#56950f', color: '#56950f' }}>
                    詳しく見る
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a> */}
                </div>
              </div>
            ))}
          </div>

          {/* 追加の事例カード（必要に応じて） */}
          {/* <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#56950f' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">化学工業D社様</h4>
                  <p className="text-xs text-gray-600">プラント設備最適化</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                反応プロセスの電化により、CO2排出量40%削減を達成
              </p>
              <a href="#" className="text-sm font-medium inline-flex items-center" style={{ color: '#56950f' }}>
                詳細を見る
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#56950f' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm3 5a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1zm0 3a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">物流センターE社様</h4>
                  <p className="text-xs text-gray-600">倉庫設備省エネ化</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                IoT活用による運用最適化で、年間電力使用量25%削減
              </p>
              <a href="#" className="text-sm font-medium inline-flex items-center" style={{ color: '#56950f' }}>
                詳細を見る
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4" style={{ backgroundColor: '#56950f' }}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 7a1 1 0 000 2h4a1 1 0 100-2H8zm0 3a1 1 0 000 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">食品製造F社様</h4>
                  <p className="text-xs text-gray-600">冷凍設備効率化</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                高効率冷凍機導入により、エネルギーコスト30%削減
              </p>
              <a href="#" className="text-sm font-medium inline-flex items-center" style={{ color: '#56950f' }}>
                詳細を見る
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div> */}

          {/* 実績サマリー */}
          {/* <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              導入実績サマリー
            </h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#56950f' }}>50+</div>
                <div className="text-sm text-gray-600">導入企業数</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#56950f' }}>30%</div>
                <div className="text-sm text-gray-600">平均CO2削減率</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#56950f' }}>1,000万円</div>
                <div className="text-sm text-gray-600">平均年間削減額</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2" style={{ color: '#56950f' }}>100%</div>
                <div className="text-sm text-gray-600">目標達成率</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}