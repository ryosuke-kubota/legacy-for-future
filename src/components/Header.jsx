export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="Legacy for Future" 
              className="h-12"
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {/* <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">個人のお客さま</a>
            <a href="#" className="text-blue-600 font-medium">法人のお客さま</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">企業情報</a> */}
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">お問い合わせ</a>
          </nav>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}