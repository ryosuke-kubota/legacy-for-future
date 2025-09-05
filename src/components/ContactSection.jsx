export default function ContactSection() {
  return (
    <section 
      className="py-16 sm:py-20 md:py-24 lg:py-32 relative bg-bottom bg-no-repeat"
      style={{ 
        backgroundImage: 'url(/images/contact_bg.png)',
        backgroundSize: '100% auto',
        backgroundColor: '#e8f4f8'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent"></div>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/85 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-10 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-gray-800">
              GXコンサルティングサービスに関する<br />
              お問い合わせ
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-700">
              お客さまの現状に最適なソリューションをご提案いたします
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6 sm:mb-8">
              <a href="mailto:legacy.forfuture@greenoffset.jp" className="inline-flex justify-center items-center px-6 py-3 sm:px-8 sm:py-4 font-bold text-sm sm:text-base rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105" style={{ backgroundColor: '#56950f', color: 'white' }}>
                お問い合わせはこちら
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            <div className="mt-6 sm:mt-8 text-xs sm:text-sm text-gray-700">
              <p>営業時間: 平日 9:00-17:00（土日祝日を除く）</p>
              <p>お急ぎの場合はお電話でもお問い合わせいただけます</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}