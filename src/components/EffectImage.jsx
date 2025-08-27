export default function EffectImage() {
  return (
    <section id="section04" className="bg-white">
      {/* メインコンテンツ */}
      <div className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              GXコンサルティングサービスの効果イメージ
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div className="order-2 md:order-1">
                <img src="/images/image01.png" alt="" />
              </div>

              <div className="order-1 md:order-2">
                <p>GXコンサルティングサービスでは、お客さまが設備投資を計画する初期段階から、当社が計画の立案に参画することで、CO2の排出量や投資コストを最小限に抑え、メンテナンス性や作業性などの潜在課題にも配慮した設備投資が可能となります。</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* パララックス CTA セクション */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* 背景画像（パララックス効果） */}
        <div 
          className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/parallax-bg.png)', // 適切な背景画像に変更
            backgroundAttachment: 'fixed',
          }}
        ></div>
        
        {/* 黒いオーバーレイ */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        
        {/* コンテンツ */}
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">
            プロジェクトの効果を高めるためには、初期の構想が重要です。
            </h3>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
            ご計画はお早めにご相談ください。
            </p>
            <a 
              href="#" 
              className="inline-flex items-center px-12 py-5 font-bold text-lg rounded-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform"
              style={{ backgroundColor: '#56950f' }}
            >
              詳しいご相談はこちら
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}