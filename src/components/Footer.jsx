export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="col-span-2 md:col-span-1">
            <img 
              src="/images/logo-square.png" 
              alt="Legacy for Future" 
              className="h-32 sm:h-16 mb-4 mx-auto md:mx-0"
            />
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              カーボンニュートラル社会の実現に向けた最適な環境投資を実現し、お客さまの環境目標達成に貢献します。
            </p>
          </div>

          <div>
            {/* <h3 className="font-bold text-lg mb-4">法人のお客さま</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">脱炭素化サービス</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">省エネ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">電化</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">再生可能エネルギー</a></li>
            </ul> */}
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">サービス</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">GXコンサルティング</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">エネルギー診断</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">省エネ設備導入</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">導入支援</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">お問い合わせ</h3>
            <div className="space-y-4">
              <a href="#" className="inline-flex items-center px-3 py-2 sm:px-4 bg-blue-600 text-white text-xs sm:text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
                お問い合わせはこちら
                <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="text-xs sm:text-sm text-gray-600">
                <p>営業時間: 平日 9:00-17:00</p>
                <p>（土日祝日を除く）</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-6 sm:mt-8 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xs sm:text-sm text-gray-500 mb-4 md:mb-0">
              © 2025 Legacy for Future株式会社 All rights reserved.
            </div>
            <div className="flex space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">プライバシーポリシー</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">利用規約</a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}