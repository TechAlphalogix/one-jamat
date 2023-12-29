"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const topDivClasses = `sticky transition ease-in-out delay-150 top-0 z-50 bg-[#ffffff] ${
    hasScrolled ? "shadow-lg" : ""
  }`;

  return (
    <>
      {/* Overlay for darkening the website */}
      {isMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-80 transition ease-in-out delay-150 z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Navigation bar */}
      <div className={topDivClasses}>
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-end">
            
            <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
                <Link
                  href="/"
                  aria-label="Home"
                  title="Home"
                  className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-[#ff6968]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  aria-label="About"
                  title="About"
                  className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-[#ff6968]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  aria-label="Companies"
                  title="Companies"
                  className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-[#ff6968]"
                >
                  Companies
                </Link>
              </li>
            </ul>
            <div className="lg:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-[#000000]" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute  border border-black z-50 top-0 left-0 w-full">
                  <div className="p-5 bg-[#ffffff] rounded shadow-sm">
                    <div className="flex items-center justify-end mb-4">
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-[#000]" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <Link
                            href="/"
                            aria-label="home"
                            title="home"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-[#ff6968]"
                          >
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/about"
                            aria-label="About Us"
                            title="About Us"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-[#ff6968]"
                          >
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/companies"
                            aria-label="Companies"
                            title="Companies"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-[#ff6968]"
                          >
                            Companies
                          </Link>
                        </li>
                        
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};