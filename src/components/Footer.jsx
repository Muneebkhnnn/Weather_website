import React from 'react'

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="https://img.icons8.com/external-beshi-color-kerismaker/48/external-Cloud-Sun-weather-beshi-color-kerismaker.png" alt="" className="h-6 w-6 text-blue-500" />
                            <span className="text-lg font-bold">WeatherNow</span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            Accurate weather forecasts to help you plan your day with
                            confidence.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className=" h-6 w-6 text-gray-400 hover:text-white transition-colors">
                                <img
                                src="https://img.icons8.com/?size=100&id=8818&format=png&color=22C3E6" alt="facebook" />
                            </a>
                            <a href="#" className=" h-6 w-6.5 text-gray-400 hover:text-white transition-colors">
                                <img src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000" alt="X" />
                            </a>
                            <a href="#" className="h-7 w-6.5 text-gray-400 hover:text-white transition-colors">
                                <img src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000" alt="instagram" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Weather Forecast
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Severe Weather Alerts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Weather Maps
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Weather API
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Press
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Cookie Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Data Sources
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} WeatherNow. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer