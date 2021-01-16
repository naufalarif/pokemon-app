import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10 px-4 sm:px-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <img className="h-8 w-auto sm:h-10" src="/imgs/logo.png" alt="" />
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <button 
                type="button" 
                className="group bg-white rounded-md text-gray-500 
                  inline-flex items-center 
                  text-base font-medium 
                  hover:text-blue-900 hover:bg-blue-100
                  focus:bg-blue-100 focus:outline-none 
                  md:px-2 md:py-2"
              >
                <span>Adventure</span>
              </button>
            </div>

            <div className="relative">
              <button 
                type="button" 
                className="group bg-white rounded-md text-gray-500 inline-flex 
                  items-center 
                  text-base font-medium 
                  hover:text-blue-900 hover:bg-blue-100
                  focus:bg-blue-100 focus:outline-none 
                  md:px-2 md:py-2"
              >
                <span>My Pokemon</span>
              </button>
            </div>

            <div className="relative">
              <button 
                type="button" 
                className="group bg-white rounded-md text-gray-500 inline-flex 
                  items-center text-base font-medium 
                  hover:text-blue-900 hover:bg-blue-100
                  focus:bg-blue-100 focus:outline-none 
                  md:px-2 md:py-2"
              >
                <span>History</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}