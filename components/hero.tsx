"use client";

import { useEffect, useState } from "react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
  "/hero6.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative bg-gradient-to-br from-amber-50 to-white py-30 overflow-hidden">

        {/* تأثير خلفية ناعم */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl opacity-30"></div>

        <div className="max-w-7xl mx-auto px-9 grid md:grid-cols-2 gap-12 items-center">

          {/* الجهة اليسرى - النص */}
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-extrabold text-neutral-900 leading-tight">
              متجر إكسبريس
              <span className="block text-amber-500 mt-3">
                بسيط. سريع. موثوق.
              </span>
            </h1>

            <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-xl">
              في <strong>متجر إكسبريس</strong> نقدم لك تجربة تسوق إلكترونية
              عصرية مصممة لتكون سهلة وسريعة.
              اكتشف منتجات عالية الجودة بأسعار مناسبة
              مع توصيل سريع إلى جميع مدن المغرب.
              <br /><br />
              اطلب بسهولة عبر واتساب، واستفد من خدمة موثوقة
              وتجربة تسوق مريحة بدون تعقيد.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#products"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-7 py-3 rounded-full font-semibold transition"
              >
                تسوق الآن
              </a>

              <a
                href="/cart"
                className="border border-neutral-900 text-neutral-900 hover:bg-neutral-100 px-7 py-3 rounded-full font-semibold transition"
              >
                عرض السلة
              </a>
            </div>
          </div>

          {/* الجهة اليمنى - السلايدر */}
          <div className="relative w-full flex justify-center">
            <div className="relative w-[260px] md:w-[340px] h-[360px] md:h-[440px]">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="منتج"
                  className={`absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transition-all duration-700
                    ${
                      index === current
                        ? "opacity-100 scale-100 z-20"
                        : "opacity-0 scale-95 z-10"
                    }
                  `}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      <section id="products" className="p-6">
        {/* المنتجات هنا */}
      </section>
    </>
  );
}
