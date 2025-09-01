export default function CaseVideos() {
  return (
    <section id="section05" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
            事例紹介動画
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
            実際にGXコンサルティングサービスを導入いただいたお客さまの事例をご紹介します
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">製造業A社様の事例</h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-4">
                  工場全体のエネルギー効率化により、CO2排出量を30%削減。同時にコスト削減も実現した事例をご紹介します。
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">物流業B社様の事例</h3>
                <p className="text-gray-700 text-xs sm:text-sm mb-4">
                  倉庫設備の電化とエネルギーマネジメントシステム導入により、大幅な省エネを実現した事例です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}