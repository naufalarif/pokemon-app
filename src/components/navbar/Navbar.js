import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './navbar.module.css';

export default function Navbar({ active }) {
  const [ isMobileOpen, setIsMobileOpen ] = useState(false);

  const toggleOpenMobileSection = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const activeAdventure =
    active === 'adventure'
      ? 'text-blue-500 font-extrabold cursor-default'
      : 'text-gray-500 font-bold';
  const activePokedex =
    active === 'pokedex'
      ? 'text-blue-500 font-extrabold cursor-default'
      : 'text-gray-500 font-bold';
  const activeMyPokemon =
    active === 'mypokemon'
      ? 'text-blue-500 font-extrabold cursor-default'
      : 'text-gray-500 font-bold';
  const activeHistory =
    active === 'history'
      ? 'text-blue-500 font-extrabold cursor-default'
      : 'text-gray-500 font-bold';

  const mobileAdventure =
    active === 'adventure'
      ? 'bg-blue-500 text-gray-100 font-extrabold'
      : 'text-gray-500 font-bold';
  const mobilePokedex =
    active === 'pokedex'
      ? 'bg-blue-500 text-gray-100 font-extrabold'
      : 'text-gray-500 font-bold';
  const mobileMyPokemon =
    active === 'mypokemon'
      ? 'bg-blue-500 text-gray-100 font-extrabold'
      : 'text-gray-500 font-bold';
  const mobileHistory =
    active === 'history'
      ? 'bg-blue-500 text-gray-100 font-extrabold'
      : 'text-gray-500 font-bold';

  const mobileActive = !isMobileOpen ? 'hidden' : '';
  const toggleIcon = isMobileOpen ? (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  ) : (
    <svg
      className="h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  return (
    <div className={`${styles.navbar} bg-white border-b-2 border-gray-100`}>
      <div className="mx-auto">
        <div
          className="wrapper flex justify-between items-center py-3
            md:justify-start md:space-x-10 px-4 sm:px-6"
        >
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <Image
                width={100}
                height={45}
                src="/imgs/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          {/* Humberger Icon */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center
                justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={toggleOpenMobileSection}
            >
              <span className="sr-only">Open menu</span>
              {toggleIcon}
            </button>
          </div>

          {/* Desktop Version */}
          <nav id="desktop" className="hidden md:flex space-x-10">
            <div className="relative">
              <Link href="/adventure">
                <button
                  type="button"
                  className={`group bg-white rounded-md ${activeAdventure}
                    inline-flex items-center 
                    text-base font-medium 
                    hover:text-blue-500 focus:outline-none 
                    md:px-2 md:py-2`}
                >
                  <span>Adventure</span>
                </button>
              </Link>
            </div>

            <div className="relative">
              <Link href="/pokedex">
                <button
                  type="button"
                  className={`group bg-white rounded-md ${activePokedex}
                    inline-flex items-center 
                    text-base font-medium 
                    hover:text-blue-500 focus:outline-none 
                    md:px-2 md:py-2`}
                >
                  <span>Pokédex</span>
                </button>
              </Link>
            </div>

            <div className="relative">
              <Link href="/my-pokemon">
                <button
                  type="button"
                  className={`group bg-white rounded-md ${activeMyPokemon}
                    items-center inline-flex 
                    text-base font-medium 
                    hover:text-blue-500 focus:outline-none 
                    md:px-2 md:py-2`}
                >
                  <span>My Pokémon</span>
                </button>
              </Link>
            </div>

            <div className="relative">
              <Link href="/history">
                <button
                  type="button"
                  className={`group bg-white rounded-md ${activeHistory} 
                    items-center inline-flex 
                    text-base font-medium 
                    hover:text-blue-500 focus:outline-none 
                    md:px-2 md:py-2`}
                >
                  <span>History</span>
                </button>
              </Link>
            </div>
          </nav>
        </div>

        {/* Mobile Version */}
        <div className={`${mobileActive} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-100">
            <Link href="/adventure">
              <span
                className={`${mobileAdventure} hover:text-blue-500 
                  block px-3 py-2 rounded-md text-base`}
              >
                Adventure
              </span>
            </Link>
            <Link href="/pokedex">
              <span
                className={`${mobilePokedex} hover:text-blue-500 
                  block px-3 py-2 rounded-md text-base`}
              >
                Pokédex
              </span>
            </Link>
            <Link href="/my-pokemon">
              <span
                className={`${mobileMyPokemon} hover:text-blue-500
                  block px-3 py-2 rounded-md text-base`}
              >
                My Pokémon
              </span>
            </Link>
            <Link href="/history">
              <span
                className={`${mobileHistory} hover:text-blue-500
                  block px-3 py-2 rounded-md text-base`}
              >
                History
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
