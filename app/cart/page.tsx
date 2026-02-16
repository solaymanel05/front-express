"use client";

import Link from "next/link";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, total, removeFromCart, increaseQty, decreaseQty } = useCart();

  const handleWhatsAppOrder = () => {
    const message = cart
      .map(
        (item) =>
          `• ${item.name} x${item.quantity} = ${item.price * item.quantity} DH`
      )
      .join("\n");

    const fullMessage = `🛒 New Order\n\n${message}\n\n💰 Total: ${total} DH`;
    const encodedMessage = encodeURIComponent(fullMessage);

    window.open(
      `https://wa.me/212700171873?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <main className="min-h-screen bg-[#dad7d733] p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="bg-white p-10 rounded-lg shadow text-center">
            <p className="text-gray-600 mb-4">Your cart is empty 🛒</p>
            <Link
              href="/"
              className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-neutral-800"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-4">
              {cart.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between bg-[#ffffff] p-4 rounded-lg shadow-sm"
                >
                  {/* Left */}
                  <div className="flex items-center gap-4">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-20 h-20 object-cover rounded"
                    />

                    <div>
                      <h2 className="font-extralight text-lg  text-[#232323]">{p.name}</h2>
                      <p className="text-[#747372]">{p.price} DH</p>

                      {/* Quantity */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => decreaseQty(p.id)}
                          className=" cursor-pointer w-8 h-8 flex items-center justify-center rounded border  bg-[#3d3b3b] hover:bg-[#595757]"
                        >
                          −
                        </button>

                        <span className="font-semibold text-[#2c2b2b]">{p.quantity}</span>

                        <button
                          onClick={() => increaseQty(p.id)}
                          className=" cursor-pointer w-8 h-8 flex items-center justify-center rounded border bg-[#3d3b3b] hover:bg-[#595757]"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="text-right">
                    <p className="font-extralight text-sm  bg-[#ffffff] text-[#000000] rounded-lg  p-2">
                      {p.price * p.quantity} DH
                    </p>
                    <button
                      onClick={() => removeFromCart(p.id)}
                      className="text-sm text-[#fffdfd] bg-[#3d3b3b] hover:bg-[#712828] cursor-pointer p-2 rounded-lg mt-3"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-[#dadada] p-6 rounded-lg shadow-md h-fit">
              <h2 className="text-xl text-[#000000] font-extralight mb-4">Order Summary</h2>

              <div className="flex justify-between mb-4 text-[#232323]">
                <span className="text-[#000000]">Total</span>
                <span className="font-extralight bg-[#ededed] text-[#000000] rounded-lg  p-3">{total} DH</span>
              </div>

              <Link
                href="/checkout"
                className="block text-center bg-[#242323] text-white py-3 rounded-lg font-medium hover:bg-[#4b4947] transition mb-3"
              >
                Proceed to Checkout
              </Link>

              <button
                onClick={handleWhatsAppOrder}
                className="w-full bg-[#30502f] hover:bg-green-600 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2"
              >
                📲 Order via WhatsApp
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
