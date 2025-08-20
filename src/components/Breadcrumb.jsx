export default function Breadcrumb() {
  return (
    <div className="bg-gray-50 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex text-sm text-gray-600">
          <a href="#" className="hover:text-blue-600 transition-colors">TOP</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-blue-600 transition-colors">法人のお客さま</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-blue-600 transition-colors">脱炭素化サービス</a>
          <span className="mx-2">/</span>
          <a href="#" className="hover:text-blue-600 transition-colors">省エネ</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">GXコンサルティングサービス</span>
        </nav>
        <div className="mt-4">
          <a href="#" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200">
            お問い合わせ
          </a>
        </div>
      </div>
    </div>
  )
}