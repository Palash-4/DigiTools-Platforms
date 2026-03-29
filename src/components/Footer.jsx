import React from 'react';
import { FaFacebookF, FaYoutube, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#0b1324] text-gray-300 px-10 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-white mb-4 ">DigiTools</h2>
                    <p className="text-sm leading-6 max-w-sm text-gray-400">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Product</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Templates</li>
                        <li>Integrations</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li>About</li>
                        <li>Blog</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-white font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-sm mb-6 text-gray-400">
                        <li>Documentation</li>
                        <li>Help Center</li>
                        <li>Community</li>
                        <li>Contact</li>
                    </ul>

                    <h3 className="text-white font-semibold mb-3">Social Links</h3>
                    <div className="flex gap-3">
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer">
                            <FaYoutube />
                        </div>
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer">
                            <FaFacebookF />
                        </div>
                        <div className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 cursor-pointer">
                            <FaXTwitter />
                        </div>
                    </div>

                </div>

            </div>
            <div className="border-t border-gray-700 my-10"></div>
            <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                <p className='text-gray-400'>© 2026 Digitools. All rights reserved.</p>
                <div className="flex gap-6 text-gray-400">
                    <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                    <span className="hover:text-white cursor-pointer">Terms of Service</span>
                    <span className="hover:text-white cursor-pointer">Cookies</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;