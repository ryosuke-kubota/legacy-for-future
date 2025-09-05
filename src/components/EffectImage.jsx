export default function EffectImage() {
  return (
    <section id="section04" className="bg-white">
      {/* メインコンテンツ */}
      <div className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 lg:mb-8 px-2">
              中小企業GX支援の導入効果
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
              <div className="order-2 md:order-1">
                <img src="/images/kouka.png" alt="" className="w-full h-auto" />
              </div>

              <div className="order-1 md:order-2 px-3 sm:px-4 md:px-6 lg:px-0">
                <p className="text-sm sm:text-sm md:text-base lg:text-lg leading-relaxed">中小企業GX支援サービスでは、現状の把握から計画立案、実行支援まで一貫してサポート。補助金活用により初期投資を抑えながら、確実にCO2削減目標を達成し、取引先からの要求にも対応可能な体制を構築します。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* パララックス CTA セクション */}
      <div className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* 背景画像（パララックス効果） */}
        <div 
          className="absolute inset-0 bg-center bg-cover bg-no-repeat md:bg-fixed"
          style={{
            backgroundImage: 'url(/images/parallax-bg.png)', // 適切な背景画像に変更
            backgroundAttachment: window.innerWidth >= 768 ? 'fixed' : 'scroll',
          }}
        ></div>
        
        {/* 黒いオーバーレイ */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* コンテンツ */}
        <div className="relative z-10 text-center text-white px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            早期の取り組みが、競争優位性を生み出します
            </h3>
            <p className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 opacity-90 px-2 sm:px-4">
            まずは無料相談で、貴社に最適なGX戦略をご提案します
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-4 sm:px-6 md:px-8 lg:px-12 py-2.5 sm:py-3 md:py-4 lg:py-5 font-bold text-sm sm:text-sm md:text-base lg:text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              style={{ backgroundColor: '#56950f' }}
            >
              詳しいご相談はこちら
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 ml-1 sm:ml-2 md:ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}