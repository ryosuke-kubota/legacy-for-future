export default function ServiceOverview() {
  return (
    <section id="section02" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            中部電力ミライズの<br />
            GXコンサルティングサービスとは
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
            <p className="text-gray-700 leading-relaxed">
              従来の「新設・改修プロジェクト」では、過去の設備仕様に基づき設計されることで、仕様のミスマッチによるエネルギーの過剰使用に繋がったり、必要以上の投資コストが生じたりすることがあります。
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-gray-700 leading-relaxed">
              当社のGXコンサルティングサービスでは、お客さまの現状に即した最適なシステムを構築することにより、CO2排出量・投資コストを最小限に抑えたカーボンニュートラル工場を実現します。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">従来の課題</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                過去の設備仕様に基づく設計
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                仕様のミスマッチによるエネルギー過剰使用
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                必要以上の投資コスト
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900">GXソリューション</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                現状に即した最適システム構築
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                CO2排出量の最小化
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                投資コストの最適化
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            カーボンニュートラル工場の実現
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            お客さまの現状分析から最適解の提案まで、一貫したサポートを提供
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">省エネ</div>
              <div className="text-sm opacity-80">エネルギー効率最大化</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">コスト削減</div>
              <div className="text-sm opacity-80">投資効果最大化</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-3xl font-bold mb-2">CN実現</div>
              <div className="text-sm opacity-80">環境目標達成</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}