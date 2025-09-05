export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Legacy for Future" 
              className="h-10 sm:h-12"
            />
          </div>
          <nav className="flex space-x-4 sm:space-x-8">
            {/* <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">個人のお客さま</a>
            <a href="#" className="text-blue-600 font-medium">法人のお客さま</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">企業情報</a> */}
            <a 
              href="mailto:legacy.forfuture@greenoffset.jp" 
              className="px-4 py-2 sm:px-6 sm:py-2 text-xs sm:text-sm text-white font-bold rounded-lg hover:shadow-lg transition-all duration-200"
              style={{ backgroundColor: '#56950f' }}
            >
              お問い合わせ
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}