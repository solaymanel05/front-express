"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, total, removeFromCart, increaseQty, decreaseQty } = useCart();

  const handleWhatsAppOrder = () => {
    const message = cart
      .map(
        (item) =>
          `• ${item.name} ×${item.quantity} = ${item.price * item.quantity} درهم`
      )
      .join("\n");

    const fullMessage = `🛒 طلب جديد\n\n${message}\n\n💰 المجموع: ${total} درهم`;
    const encodedMessage = encodeURIComponent(fullMessage);

    window.open(
      `https://wa.me/212700171873?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#dad7d733] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">سلة المشتريات</h1>

        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-lg shadow text-center">
            <p className="text-gray-600 mb-4">سلة المشتريات فارغة 🛒</p>
            <Link
              href="/"
              className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-neutral-800"
            >
              متابعة التسوق
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* المنتجات */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
                >
                  {/* اليسار */}
                  <div className="flex items-center gap-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    <div>
                      <h2 className="font-extralight text-lg text-[#232323]">
                        {p.name}
                      </h2>
                      <p className="text-[#747372]">{p.price} درهم</p>

                      {/* الكمية */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQty(p.id)}
                          className="cursor-pointer w-8 h-8 flex items-center justify-center rounded border bg-[#ffffff] hover:bg-[#ffffff] text-neutral-950"
                        >
                          −
                        </button>

                        <span className="font-semibold text-[#2c2b2b]">
                          {p.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(p.id)}
                          className="cursor-pointer w-8 h-8 flex items-center justify-center rounded border bg-[#ffffff] hover:bg-[#ffffff] text-neutral-950"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* اليمين */}
                  <div className="text-left">
                    <p className="font-extralight text-sm bg-white text-black rounded-lg p-2">
                      {p.price * p.quantity} درهم
                    </p>
                    <button
                      onClick={() => removeFromCart(p.id)}
                      className="text-sm text-white bg-[#3d3b3b] hover:bg-[#712828] cursor-pointer p-2 rounded-lg mt-3"
                    >
                      حذف
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ملخص الطلب */}
            <div className="bg-[#dadada] p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl text-black font-extralight mb-4">
                ملخص الطلب
              </h2>

              <div className="flex justify-between mb-4 text-[#232323]">
                <span>المجموع</span>
                <span className="font-extralight bg-[#ededed] text-black rounded-lg p-3">
                  {total} درهم
                </span>
              </div>

              <Link
                href="/checkout"
                className="block text-center bg-[#242323] text-white py-3 rounded-lg font-medium hover:bg-[#4b4947] transition mb-3"
              >
                إتمام الطلب
              </Link>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#30502f] hover:bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                📲 الطلب عبر واتساب
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
