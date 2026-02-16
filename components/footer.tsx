"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Express Store</h3>
          <p className="text-gray-300">
            Quality products, fast delivery, and easy ordering via WhatsApp.
            Your trusted online store in Morocco.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-amber-500 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-500 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-amber-500 transition">
                Cart
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-amber-500 transition">
                Checkout
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-500 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-amber-500 transition">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Express Store. All rights reserved.
      </div>
    </footer>
  );
}
