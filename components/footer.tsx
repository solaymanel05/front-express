"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-6 text-right">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* عن المتجر */}
        <div>
          <h3 className="text-xl font-bold mb-4"> EXPRESS    </h3>
          <p className="text-gray-300">
            منتجات بجودة عالية، توصيل سريع، وطلب سهل عبر واتساب.
            متجرك الإلكتروني الموثوق داخل المغرب.
          </p>
        </div>

        {/* روابط سريعة */}
        <div>
          <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-amber-500 transition">
                الرئيسية
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-amber-500 transition">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/cart" className="hover:text-amber-500 transition">
                سلة المشتريات
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="hover:text-amber-500 transition">
                إتمام الطلب
              </Link>
            </li>
          </ul>
        </div>

        {/* وسائل التواصل */}
        <div>
          <h3 className="text-xl font-bold mb-4">تابعنا</h3>
          <div className="flex gap-4 justify-start md:justify-start">
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

      {/* الأسفل */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} متجر إكسبريس. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
