export default function GXVision() {
  return (
    <section id="section01" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-6 rounded-full mb-4" style={{ backgroundColor: '#56950f' }}>
            ABOUT GX
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            GX＝<span style={{ color: '#56950f' }}>グリーントランスフォーメーション</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              GXとは、「グリーントランスフォーメーション」の略。<br />
              2050年カーボンニュートラルや、2030年の国としての温室効果ガス排出削減目標の達成に向けた取組を経済の成長の機会と捉え、排出削減と産業競争力の向上の実現に向けて、経済社会システム全体の変革がGXです。
            </p>
            <p className="text-xs sm:text-sm text-gray-500">（出典：経済産業省）</p>
          </div>
        </div>

        {/* カーボンニュートラル目標セクション */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6" style={{ color: '#56950f' }}>
            2030年温室効果ガス46％以上削減<br />
            2050年カーボンニュートラルを目指して
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
            2020年に菅首相（当時）は「日本が2050年までにカーボンニュートラルを目指す」及び「2030年度に、温室効果ガスを2013年度から46％削減することを目指す。さらに、50％の高みに向けて、挑戦を続けていく」ことを宣言しました。この宣言はこれまでの2030年度の温室効果ガス削減目標を大幅に引き上げるとともに、カーボンニュートラルの達成時期を大きく前倒ししました。
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">（出典：環境省・資源エネルギー庁・経済産業省）</p>
        </div>

        {/* 東証プライム企業セクション */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-6 sm:p-8 md:p-12 mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6" style={{ color: '#56950f' }}>
            東証プライム企業でのサプライチェーン情報開示
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4">
            現在、東京証券取引所プライム市場に上場している企業については、TCFD基準での情報開示が求められています。GHGプロトコルを用いて、サプライチェーンを構成する企業の情報を収集して、各カテゴリーに対応した算定が求められています。
          </p>
          <div className="bg-white/70 rounded-xl p-4 sm:p-6">
            <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">
              つまり東証プライム市場上場企業と取引がある企業は、GHGプロトコルに基づいたサプライチェーンでの排出量削減に貢献する必要があります。
            </p>
          </div>
        </div>

        {/* 中小企業サポートメッセージ */}
        <div className="text-center mb-16">
          <div className="inline-block bg-yellow-50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4" style={{ color: '#56950f' }}>
              中小企業のさまざまな取り組みをサポートします
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-4">
              GXにまつわる中小企業の様々なお悩みの解決に一緒に取り組みます。
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-left text-sm sm:text-base text-gray-700">
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">・</span>
                <span>GHGプロトコルに基づくCO2排出量の算定</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">・</span>
                <span>取引先から求められてくるさまざまなデータについて</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">・</span>
                <span>SBT認定のためにはどのようなことをすればよいか</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-600 mt-1">・</span>
                <span>社内での取りまとめ方法　などなど</span>
              </div>
            </div>
          </div>
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

        <div className="bg-gray-100 rounded-xl p-4 sm:p-6 text-xs sm:text-sm text-gray-600 space-y-2">
          <p>（注1）2019年度累計実績</p>
          <p>（注2）Quality（品質）、Cost（コスト）、Delivery（納期）の頭文字で開発・生産の評価指標の一つ</p>
          <p>（注3）Carbon Neutrality の頭文字で温室効果ガスの排出量と吸収量を均衡させること</p>
        </div>
      </div>
    </section>
  )
}