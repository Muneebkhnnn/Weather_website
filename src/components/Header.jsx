import React from 'react'
import { useState } from 'react';
function Header() {

    const [menu, setmenu] = useState(false);

    return (
        <header className="bg-white shadow-sm sticky top-0 z-10  ">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <img src="https://img.icons8.com/external-beshi-color-kerismaker/48/external-Cloud-Sun-weather-beshi-color-kerismaker.png" alt="" className="h-6 w-6 text-blue-500" />
                    <span className="text-xl font-bold text-gray-800">WeatherNow</span>
                </div>
                <nav className="hidden md:flex md:mr-6 items-center gap-6">
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                        Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                        Forecast
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                        Maps
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
                        News
                    </a>

                </nav>
                <div className="relative inline-block text-left md:hidden">
                    <button
                        aria-expanded={menu}
                        aria-haspopup="true"
                        onClick={() => setmenu(!menu)}
                        className="relative cursor-pointer inline-flex justify-center w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow ring-1 ring-gray-300 hover:bg-gray-100 transition-all"
                    >
                        ☰
                    </button>

                    {menu && (
                        <nav className="absolute right-0 z-20 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none flex flex-col p-2 gap-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded">
                                Home
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded">
                                Forecast
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded">
                                Maps
                            </a>
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-500 hover:bg-gray-100 rounded">
                                News
                            </a>
                        </nav>
                    )}
                </div>

            </div>
        </header>
    )
}

export default Header