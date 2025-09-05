export default function CompanyProfile() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">
            会社概要
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Legacy for Future株式会社について
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-10">
          {/* モバイル用レイアウト（縦並び） */}
          <div className="block sm:hidden space-y-4">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-bold text-gray-700 text-xs mb-1">商号</div>
              <div className="text-gray-800 text-sm">株式会社Legacy for Future</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-bold text-gray-700 text-xs mb-1">本社所在地</div>
              <div className="text-gray-800 text-sm">札幌市白石区東札幌一条二丁目2番1-20　1号</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-bold text-gray-700 text-xs mb-1">設立</div>
              <div className="text-gray-800 text-sm">令和7年7月24日</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-bold text-gray-700 text-xs mb-1">資本金</div>
              <div className="text-gray-800 text-sm">100万円</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-bold text-gray-700 text-xs mb-1">代表者</div>
              <div className="text-gray-800 text-sm">代表取締役　和田善大</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="font-bold text-gray-700 text-xs mb-2">事業内容</div>
              <div className="text-gray-800 text-xs space-y-1.5">
                <div>1. サスティナビリティ分野に関するサービス及び調査</div>
                <div>2. 脱炭素事業及び地球温暖化の原因・営業・阻害及び適応効果ガス吸収クレジット事業</div>
                <div>3. 各種商品の企画、製造、販売及び輸出入の仲立ち</div>
                <div>4. サスティナビリティ分野におけるアドバイザリーサービス</div>
                <div>5. 上記各号に附帯関連する一切の事業</div>
              </div>
            </div>
          </div>

          {/* タブレット・デスクトップ用レイアウト（テーブル） */}
          <div className="hidden sm:block overflow-x-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-4 px-2 font-bold text-gray-700 bg-gray-50 text-sm sm:text-base whitespace-nowrap">商号</td>
                  <td className="py-4 px-4 text-gray-800 text-sm sm:text-base">
                    株式会社Legacy for Future
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-bold text-gray-700 bg-gray-50 text-sm sm:text-base whitespace-nowrap">
                    本社所在地
                  </td>
                  <td className="py-4 px-4 text-gray-800 text-sm sm:text-base">
                    札幌市白石区東札幌一条二丁目2番1-20　1号
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-bold text-gray-700 bg-gray-50 text-sm sm:text-base whitespace-nowrap">
                    設立
                  </td>
                  <td className="py-4 px-4 text-gray-800 text-sm sm:text-base">
                    令和7年7月24日
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-bold text-gray-700 bg-gray-50 text-sm sm:text-base whitespace-nowrap">
                    資本金
                  </td>
                  <td className="py-4 px-4 text-gray-800 text-sm sm:text-base">
                    100万円
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-bold text-gray-700 bg-gray-50 text-sm sm:text-base align-top whitespace-nowrap">
                    代表者
                  </td>
                  <td className="py-4 px-4 text-gray-800 text-sm sm:text-base">
                    代表取締役　和田善大
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-2 font-bold text-gray-700 bg-gray-50 text-sm sm:text-base align-top whitespace-nowrap">
                    事業内容
                  </td>
                  <td className="py-4 px-4 text-gray-800 text-sm sm:text-base">
                    <div className="space-y-2">
                      <div>1. サスティナビリティ分野に関するサービス及び調査</div>
                      <div>2. 脱炭素事業及び地球温暖化の原因・営業・阻害及び適応効果ガス吸収クレジット事業並びに、売買及びそれらを基にカーボンニュートラル、及びそれらを基に行うコンサルティング</div>
                      <div>3. 各種商品の企画、製造、販売及び輸出入の仲立ち</div>
                      <div>4. サスティナビリティ分野におけるアドバイザリーサービス</div>
                      <div>5. 上記各号に附帯関連する一切の事業</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}