export default function CaseVideos() {
  return (
    <section id="section05" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            事例紹介動画
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            実際にGXコンサルティングサービスを導入いただいたお客さまの事例をご紹介します
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">製造業A社様の事例</h3>
                <p className="text-gray-700 text-sm mb-4">
                  工場全体のエネルギー効率化により、CO2排出量を30%削減。同時にコスト削減も実現した事例をご紹介します。
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-sm font-medium">再生時間: 5分30秒</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    詳細を見る →
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">物流業B社様の事例</h3>
                <p className="text-gray-700 text-sm mb-4">
                  倉庫設備の電化とエネルギーマネジメントシステム導入により、大幅な省エネを実現した事例です。
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-blue-600 text-sm font-medium">再生時間: 4分15秒</span>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    詳細を見る →
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">CO2削減効果</h4>
                <p className="text-2xl font-bold text-blue-600 mb-1">平均30%</p>
                <p className="text-gray-600 text-sm">年間排出量削減</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">コスト削減</h4>
                <p className="text-2xl font-bold text-green-600 mb-1">平均25%</p>
                <p className="text-gray-600 text-sm">エネルギーコスト削減</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">導入期間</h4>
                <p className="text-2xl font-bold text-purple-600 mb-1">平均6ヶ月</p>
                <p className="text-gray-600 text-sm">計画から効果実現まで</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              お客さまの業種や規模に応じた最適なソリューションをご提案いたします
            </p>
            <a href="#" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              事例の詳細資料をダウンロード
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}