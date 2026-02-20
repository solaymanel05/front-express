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
          <p className="text-lg text-gray-600 mb-4">🛒 Your cart is empty</p>
        </div>
      </div>
    );
  }

  const handleConfirmOrder = async () => {
    if (!name || !phone || !city || !address) {
      alert("Please fill in all fields");
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
        },
      );

      if (res.ok) {
        setSuccess(true);
        clearCart();
      } else {
        alert("Failed to place order");
      }
    } catch (error) {
      console.error(error);
      alert("Error placing order");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#dad7d733]">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            ✅ Order Placed Successfully!
          </h2>
          <p className="text-gray-700 mb-6">
            Thank you {name}, your order has been received.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#dad7d733] flex items-center justify-center mt-7 p-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold mb-4 text-center text-neutral-950">
          Checkout
        </h1>

        {/* Customer Info */}
        <div className="space-y-3 bg">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg text-[#0c0c0c] focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        {/* Cart Summary */}
        <div className="border-t pt-4 space-y-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-gray-700"
            >
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{item.price * item.quantity} DH</span>
            </div>
          ))}
          <div className="flex justify-between font-bold text-black text-lg">
            <span>Total</span>
            <span>{total} DH</span>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirmOrder}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition disabled:opacity-50"
        >
          {loading ? "Placing Order..." : "Confirm Order"}
        </button>
      </div>
    </main>
  );
}
