import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const onToggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <header className="bg-gray-800 hidden lg:block">
        {/* Desktop Header */}
        <div className="px-4 py-2 justify-between flex items-center w-[92%] mx-auto">
          <div className="flex items-center space-x-4">
            <span className=" text-white text-sm">
              <i className="fa-solid fa-phone text-white"></i>
              <span className="text-white text-sm"> (225) 555-0118</span>
            </span>
            <span className="mr-6">
              <i className="fa-solid fa-envelope cursor-pointer text-white"></i>
              <span className="text-white text-sm"> michelle.rivera@example.com</span>
            </span>
          </div>

          <div className="flex items-center space-x-4 text-white text-sm">Follow Us and get a chance to win 80% off</div>
          <div className="flex items-center space-x-4 text-white text-sm">
            <span className="flex items-center">
              <span className="mr-6">Follow Us:</span>

              <span className="mr-6">
                <i className="fa-brands fa-instagram text-white cursor-pointer"></i>
              </span>

              <span className="mr-6">
                <i className="fa-brands fa-youtube text-white cursor-pointer"></i>
              </span>
              <span className="mr-6">
                <i className="fa-brands fa-facebook text-white cursor-pointer"></i>
              </span>
              <span className="">
                <i className="fa-brands fa-twitter text-blue-50 cursor-pointer"></i>
              </span>

            </span>
          </div>
          <i className="fas fa-bars text-white md:hidden cursor-pointer"></i>
        </div>
      </header>
      <header className="bg-white my-10">
        {/* Mobile Header */}
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="flex items-center space-x-4">
            <span className="text-2xl font-bold mr-16">Bandage</span>

            <div
              className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit   ${menuOpen ? "top-[9%]" : "top-[-100%]"
                } md:w-auto w-full flex items-center px-5 justify-center md:justify-start`}
            >
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                <li>
                  <Link to="/" className="hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li className="relative group">
                  <button onClick={onToggleDropdown} className="hover:text-gray-700">
                    Shop <i className={`fas ${dropdownOpen ? "fa-angle-down" : "fa-angle-up"}`}></i>
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-lg group-hover:block">
                      <div className="p-4 flex flex-col md:flex-row md:gap-4 gap-4">
                        <div>
                          <h3 className="font-semibold">Kadın</h3>
                          <ul>
                            <li>
                              <Link to="/shop/kadin/etek" className="block px-4 py-2 hover:bg-gray-100">
                                Tişört
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">
                                Ayakkbı
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">
                                Ceket
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">
                                Elbise
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">
                                Etek
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">
                                Gömlek
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">
                                Kazak
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/kadin/tayt" className="block px-4 py-2 hover:bg-gray-100">
                                Pantolons
                              </Link>
                            </li>

                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold">Erkek</h3>
                          <ul>
                            <li>
                              <Link to="/shop/erkek/gomlek" className="block px-4 py-2 hover:bg-gray-100">
                                Ayakkabı
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/erkek/kravat" className="block px-4 py-2 hover:bg-gray-100">
                                Ceket
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/erkek/kravat" className="block px-4 py-2 hover:bg-gray-100">
                                Gömlek
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/erkek/kravat" className="block px-4 py-2 hover:bg-gray-100">
                                Kazak
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/erkek/kravat" className="block px-4 py-2 hover:bg-gray-100">
                                Pantolon
                              </Link>
                            </li>
                            <li>
                              <Link to="/shop/erkek/kravat" className="block px-4 py-2 hover:bg-gray-100">
                                Tişört
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-700">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="hover:text-gray-700">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-700">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/pages" className="hover:text-gray-700">
                    Pages
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <i className="fas fa-user hidden md:block text-navbarLigthBlue cursor-pointer"></i>
            <Link to="/login" className="hidden md:block text-navbarLigthBlue hover:underline">
              Login / Register
            </Link>
            <div className="items-end"></div>
            <i className="fas fa-search text-gray-700  md:text-navbarLigthBlue cursor-pointer"></i>
            <i className="fas fa-shopping-cart  text-gray-700 md:text-navbarLigthBlue cursor-pointer"></i>
            <i className="fa-regular fa-heart hidden md:block text-navbarLigthBlue cursor-pointer"></i>
            <i className={`fas fa-bars text-3xl cursor-pointer md:hidden`} onClick={onToggleMenu}></i>
          </div>
        </nav>
      </header>
    </header>
  );
}

export default Header;
