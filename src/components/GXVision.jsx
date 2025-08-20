export default function GXVision() {
  return (
    <section id="section01" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            私たちが目指すGXとは
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              カーボンニュートラル社会の実現に向けた最適な環境投資を実現します。<br />
              当社がお客さまへの提案活動で培った省エネや電化のノウハウを最大限に活用し、<br />
              お客さまの掲げる環境目標の確実な達成に貢献します。
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gradient-to-r from-blue-500 to-green-500 h-64 rounded-lg flex items-center justify-center text-white text-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">ミライズのノウハウで</h3>
                  <p className="text-lg">お客さまにあった最適なプランをご提案</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">省エネ</span>
                </div>
                <span className="text-gray-700">エネルギー効率の最適化</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">電化</span>
                </div>
                <span className="text-gray-700">クリーンエネルギーへの転換</span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">CN</span>
                </div>
                <span className="text-gray-700">カーボンニュートラル実現</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-2">
          <p>（注1）2019年度累計実績</p>
          <p>（注2）Quality（品質）、Cost（コスト）、Delivery（納期）の頭文字で開発・生産の評価指標の一つ</p>
          <p>（注3）Carbon Neutrality の頭文字で温室効果ガスの排出量と吸収量を均衡させること</p>
        </div>
      </div>
    </section>
  )
}