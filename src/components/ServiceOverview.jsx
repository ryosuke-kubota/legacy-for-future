export default function ServiceOverview() {
  const challenges = [
    "GHGプロトコルに基づくCO2排出量の算定",
    "取引先から求められてくるさまざまなデータについて",
    "SBT認定のためにはどのようなことをすればよいか",
    "社内での取りまとめ方法"
  ];

  return (
    <section id="section02" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-block text-white text-xs sm:text-sm font-bold px-4 py-2 sm:px-6 rounded-full mb-4" style={{ backgroundColor: '#56950f' }}>
            SUPPORT MENU
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            <span className="block" style={{ color: '#56950f' }}>
              支援メニュー
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            中小企業の皆様が抱える課題に寄り添い、<br className="hidden md:block" />
            最適なソリューションをご提供します
          </p>
        </div>

        {/* 支援メニュー一覧 */}
        <div className="space-y-6 sm:space-y-8">
          {/* CO2算定支援 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4" style={{ borderColor: '#56950f' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#56950f' }}>
              CO2排出量算定・SBT認定支援
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>中小零細企業等（特にサプライチェーン）のCO2排出量算定支援コンサルティング</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>SBT認定支援（中小零細企業向け）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>自社で算定した排出量が一般と比べて多いのか少ないのかの検証サービス</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>算定方法に問題はないかどうかの検証サービス</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>排出原単位の調査、排出原単位データベース表の見方など、いまさら聞きづらいことにも懇切丁寧に対応</span>
              </li>
            </ul>
          </div>

          {/* デジタルソリューション */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4" style={{ borderColor: '#56950f' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#56950f' }}>
              デジタルソリューション
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>中小零細企業担当者向けノーコードアプリを使用したわかりやすいCO2算定システム（貴社独自のもの）の構築・提供</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>グリーン・カーボンニュートラル化にデジタル・DX化を組み合わせたサービスの提供</span>
              </li>
            </ul>
          </div>

          {/* 補助金・人材育成支援 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4" style={{ borderColor: '#56950f' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#56950f' }}>
              補助金活用・人材育成支援
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>各種補助金等の計画策定支援、補助金を活用した事業展開の支援</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>人材関係助成金を活用したカーボンニュートラル関連研修の実施</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>中小零細企業向けゼロからわかりやすいセミナー・研修・勉強会の実施</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>中小零細企業内のカーボンニュートラル担当者育成研修の実施</span>
              </li>
            </ul>
          </div>

          {/* 省エネ・ISO支援 */}
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border-l-4" style={{ borderColor: '#56950f' }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{ color: '#56950f' }}>
              省エネ診断・ISO認証支援
            </h3>
            <ul className="space-y-3 text-sm sm:text-base text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>省エネ診断、省エネ設備導入支援、CO2排出削減提案</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>ISO14001（環境マネジメントシステム）の構築支援によるCO2排出削減の実施</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">▶</span>
                <span>ISO14001（環境マネジメントシステム）の認証取得支援によるCO2排出削減の実施</span>
              </li>
            </ul>
          </div>

          {/* 専門家相談 */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-center" style={{ color: '#56950f' }}>
              専門家による相談・アドバイス
            </h3>
            <p className="text-sm sm:text-base text-gray-700 text-center">
              専門家による相談・アドバイス・問題解決の実施<br />
              どんな小さなお悩みでも、お気軽にご相談ください
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}