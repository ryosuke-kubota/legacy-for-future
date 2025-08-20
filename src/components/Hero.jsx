export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            GXコンサルティング<br />
            <span className="text-blue-600">サービス</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            GXで省エネ・コスト削減・職場環境向上へ
          </p>
          <div className="flex justify-center animate-fade-in-up-delayed">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}