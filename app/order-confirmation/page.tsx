"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function OrderConfirmationPage() {
  const { cart, total } = useCart();

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-8 animate-fadeIn">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-2xl">
            ✓
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center text-green-600 mb-2">
          Order Confirmed
        </h1>

        <p className="text-center text-gray-600 mb-6">
          Thank you for your order! Your purchase was completed successfully.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="font-semibold mb-3">Order Summary</p>

          <div className="space-y-2 text-sm text-gray-700">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span className="font-medium">
                  {item.price * item.quantity} DH
                </span>
              </div>
            ))}
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-gray-900">
            <span>Total</span>
            <span>{total} DH</span>
          </div>
        </div>

        {/* Action */}
        <Link
          href="/"
          className="block w-full text-center bg-black text-white py-3 rounded-lg font-medium hover:bg-neutral-800 transition"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
