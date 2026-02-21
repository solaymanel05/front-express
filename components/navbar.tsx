"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 w-full z-50 bg-black text-gray-300 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* الشعار */}
        <h1 className="text-1xl font-light tracking-widest text-[#d2d1d1]">
        <Link href="/" >
            EXPRESS
        </Link>
        </h1>

        {/* القائمة في الحاسوب */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/" className="hover:text-white transition">
              الرئيسية
            </Link>
          </li>

          <li>
            <Link href="/about" className="hover:text-white transition">
              من نحن
            </Link>
          </li>

          <li className="relative">
            <Link href="/cart" className="hover:text-white transition">
              🛒 السلة
            </Link>

            {cart.length > 0 && (
              <span className="absolute -top-2 -left-3 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </li>
        </ul>

        {/* زر الموبايل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* القائمة في الهاتف */}
      <div
        className={`md:hidden bg-black transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              الرئيسية
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              من نحن
            </Link>
          </li>

          <li className="relative">
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              🛒 السلة
            </Link>

            {cart.length > 0 && (
              <span className="absolute -top-2 -left-6 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
