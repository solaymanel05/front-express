"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, total, clearCart } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (cart.length === 0 && !success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#dad7d733]">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <p className="text-lg text-gray-600 mb-4">
            🛒 سلة المشتريات فارغة
          </p>
        </div>
      </div>
    );
  }

  const handleConfirmOrder = async () => {
    if (!name || !phone || !city || !address) {
      alert("يرجى ملء جميع المعلومات المطلوبة");
      return;
    }

    const orderData = {
      customer: { name, phone, city, address },
      cart,
      total,
      createdAt: new Date(),
    };

    setLoading(true);

    try {
      const res = await fetch(
        "https://express-store-production.up.railway.app/api/orders",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
        }
      );

      if (res.ok) {
        setSuccess(true);
        clearCart();
      } else {
        alert("فشل في إرسال الطلب، حاول مرة أخرى");
      }
    } catch (error) {
      console.error(error);
      alert("حدث خطأ أثناء تأكيد الطلب");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#dad7d733]">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            ✅ تم تأكيد الطلب بنجاح!
          </h2>
          <p className="text-gray-700 mb-6">
            شكراً لك {name}، لقد توصلنا بطلبك وسنتواصل معك قريباً.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#dad7d733] flex items-center justify-center mt-7 p-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-neutral-950">
          إتمام الطلب
        </h1>

        {/* معلومات الزبون */}
        <div className="space-y-3">
          <input
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="tel"
            placeholder="رقم الهاتف"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="المدينة"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="العنوان الكامل"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* ملخص الطلب */}
        <div className="border-t pt-4 space-y-2 text-right">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-gray-700"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>{item.price * item.quantity} درهم</span>
            </div>
          ))}

          <div className="flex justify-between font-bold text-black text-lg">
            <span>المجموع</span>
            <span>{total} درهم</span>
          </div>
        </div>

        {/* زر التأكيد */}
        <button
          onClick={handleConfirmOrder}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition disabled:opacity-50"
        >
          {loading ? "جارٍ تأكيد الطلب..." : "تأكيد الطلب"}
        </button>
      </div>
    </main>
  );
}
