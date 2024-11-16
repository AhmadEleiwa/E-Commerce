import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-6 md:px-12">
        {/* Exclusive Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Exclusive</h3>
          <p className="mb-1">Subscribe</p>
          <p className="text-gray-400 mb-4">Get 10% off your first order</p>
          {/* EmailSend Input */}
          <div className="flex border border-white rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="text-white p-2 w-full outline-none bg-transparent"
            />
            <button className="text-white px-4  hover:bg-gray-100 hover:text-black">
              →
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Support</h3>
          <p className="text-gray-400 mb-1">
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.
          </p>
          <p className="text-gray-400 mb-1">exclusive@gmail.com</p>
          <p className="text-gray-400">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">My Account</a></li>
            <li><a href="#" className="hover:text-gray-300">Login / Register</a></li>
            <li><a href="#" className="hover:text-gray-300">Cart</a></li>
            <li><a href="#" className="hover:text-gray-300">Wishlist</a></li>
            <li><a href="#" className="hover:text-gray-300">Shop</a></li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Quick Link</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-300">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-gray-300">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="font-bold text-lg mb-2">Download App</h3>
          <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
          <div className="flex space-x-4">
            <img src="path-to-your-qr-code" alt="QR Code" className="w-16 h-16" />
            <div className="space-y-2">
              <img
                src="path-to-google-play-badge"
                alt="Get it on Google Play"
                className="w-32"
              />
              <img
                src="path-to-app-store-badge"
                alt="Download on the App Store"
                className="w-32"
              />
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            {/* <a href="#"><i className="fab fa-facebook-f text-xl"></i></a>
            <a href="#"><i className="fab fa-twitter text-xl"></i></a>
            <a href="#"><i className="fab fa-instagram text-xl"></i></a>
            <a href="#"><i className="fab fa-linkedin-in text-xl"></i></a> */}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-8 text-gray-400">
        &copy; Copyright Rimel 2022. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
