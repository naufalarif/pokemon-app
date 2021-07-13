import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navbar({ active }) {
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavigation = (path) => {
    router.push(`/${path}`);
  };

  const toggleOpenMobileSection = () => {
    setIsMobileOpen(!isMobileOpen)
  }
  
  const activeAdventure = active === "adventure" ? "text-blue-500 font-extrabold cursor-default" : "text-gray-500 font-bold";
  const activePokedex = active === "pokedex" ? "text-blue-500 font-extrabold cursor-default" : "text-gray-500 font-bold";
  const activeMyPokemon = active === "mypokemon" ? "text-blue-500 font-extrabold cursor-default" : "text-gray-500 font-bold";
  const activeHistory = active === "history" ? "text-blue-500 font-extrabold cursor-default" : "text-gray-500 font-bold";

  const mobileAdventure = active === "adventure" ? "bg-blue-500 text-gray-100 font-extrabold" : "text-gray-500 font-bold";
  const mobilePokedex = active === "pokedex" ? "bg-blue-500 text-gray-100 font-extrabold" : "text-gray-500 font-bold";
  const mobileMyPokemon = active === "mypokemon" ? "bg-blue-500 text-gray-100 font-extrabold" : "text-gray-500 font-bold";
  const mobileHistory = active === "history" ? "bg-blue-500 text-gray-100 font-extrabold" : "text-gray-500 font-bold";
  
  const mobileActive = !isMobileOpen ? 'hidden' : '';
  const toggleIcon = isMobileOpen 
    ? <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    : <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>;

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="mx-auto">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-3 md:justify-start md:space-x-10 px-4 sm:px-6">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <Image
                  width={100}
                  height={45}
                  src="/imgs/logo.png" 
                  alt="logo" 
                />
              </a>
            </Link>
          </div>

          {/* Humberger Icon */}
          <div className="-mr-2 -my-2 md:hidden">
            <button 
              type="button" 
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleOpenMobileSection}
            >
              <span className="sr-only">Open menu</span>
              {toggleIcon}
            </button>
          </div>
          
          {/* Desktop Version */}
          <nav id="desktop" className="hidden md:flex space-x-10">
            <div className="relative">
              <button 
                type="button" 
                onClick={() => handleNavigation('adventure')}
                className={`group bg-white rounded-md ${activeAdventure}
                  inline-flex items-center 
                  text-base font-medium 
                  hover:text-blue-500 focus:outline-none 
                  md:px-2 md:py-2`}
              >
                <span>Adventure</span>
              </button>
            </div>

            <div className="relative">
              <button 
                type="button" 
                onClick={() => handleNavigation('pokedex')}
                className={`group bg-white rounded-md ${activePokedex}
                  inline-flex items-center 
                  text-base font-medium 
                  hover:text-blue-500 focus:outline-none 
                  md:px-2 md:py-2`}
              >
                <span>Pokédex</span>
              </button>
            </div>

            <div className="relative">
              <button 
                type="button" 
                onClick={() => handleNavigation('my-pokemon')}
                className={`group bg-white rounded-md ${activeMyPokemon}
                  items-center inline-flex 
                  text-base font-medium 
                  hover:text-blue-500 focus:outline-none 
                  md:px-2 md:py-2`}
              >
                <span>My Pokémon</span>
              </button>
            </div>

            <div className="relative">
              <button 
                type="button" 
                onClick={() => handleNavigation('history')}
                className={`group bg-white rounded-md ${activeHistory} 
                  items-center inline-flex 
                  text-base font-medium 
                  hover:text-blue-500 focus:outline-none 
                  md:px-2 md:py-2`}
              >
                <span>History</span>
              </button>
            </div>
          </nav>
        </div>

        <div className={`${mobileActive} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100">
            <Link href="/adventure">
              <a><span className={`${mobileAdventure} hover:text-blue-500 block px-3 py-2 rounded-md text-base`}>Adventure</span></a>
            </Link>
            <Link href="/pokedex">
              <a><span className={`${mobilePokedex} hover:text-blue-500 block px-3 py-2 rounded-md text-base`}>Pokédex</span></a>
            </Link>
            <Link href="/my-pokemon">
              <a><span className={`${mobileMyPokemon} hover:text-blue-500 block px-3 py-2 rounded-md text-base`}>My Pokémon</span></a>
            </Link>
            <Link href="/history">
              <a><span className={`${mobileHistory} hover:text-blue-500 block px-3 py-2 rounded-md text-base`}>History</span></a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}