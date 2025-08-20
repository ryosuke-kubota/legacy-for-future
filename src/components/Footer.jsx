export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Legacy for Future
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              カーボンニュートラル社会の実現に向けた最適な環境投資を実現し、お客さまの環境目標達成に貢献します。
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">法人のお客さま</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">脱炭素化サービス</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">省エネ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">電化</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">再生可能エネルギー</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">サービス</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">GXコンサルティング</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">エネルギー診断</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">省エネ設備導入</a></li>
              <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">導入支援</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">お問い合わせ</h3>
            <div className="space-y-4">
              <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
                お問い合わせフォーム
                <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h10a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="text-sm text-gray-300">
                <p>営業時間: 平日 9:00-17:00</p>
                <p>（土日祝日を除く）</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Legacy for Future株式会社 All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">プライバシーポリシー</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">利用規約</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">サイトマップ</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}