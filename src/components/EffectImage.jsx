export default function EffectImage() {
  return (
    <section id="section04" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            GXコンサルティングサービスの効果イメージ
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 md:p-12 mb-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">従来の課題</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
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

                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-blue-600 font-medium mt-2">GXコンサルティング</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">改善効果</h3>
                  </div>
                  <ul className="space-y-3 text-sm text-gray-700">
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

              <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl p-8 text-white text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">カーボンニュートラル工場実現</h3>
                  <p className="text-lg opacity-90">最適化されたエネルギーシステムで環境目標を達成</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-2xl font-bold">CO2</div>
                    <div className="text-sm">削減</div>
                  </div>
                  <div className="bg-white bg-opacity-10 rounded-lg p-4">
                    <div className="text-2xl font-bold">コスト</div>
                    <div className="text-sm">最適化</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-gray-600 text-sm mb-6">
              お客さまの現状分析から最適解の提案まで、一貫したサポートを提供いたします
            </p>
            <a href="#" className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              詳しいご相談はこちら
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}