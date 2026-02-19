"use client";

import { useCart } from "../context/CartContext";

interface ProductCardProps {
  id?: number;
  name: string;
  price: number;
  image: string;
  quantity?: number; 
}

export default function ProductCard({
  name,
  price,
  image,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
       
      {/* Image */}
      <div className="relative overflow-hidden w-full">
        <img
          src={image}
          alt={name}
          className="w-full h-48 sm:h-52 md:h-56 lg:h-60 object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* Price badge */}
        <span className="absolute top-3 left-3 bg-black/80 text-white text-xs sm:text-sm px-3 py-1 rounded-full">
          {price} DH
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1 justify-between text-center">
        <h3 className="font-semibold text-sm sm:text-base text-neutral-900 truncate">
          {name}
        </h3>

      <button
  onClick={() =>
    addToCart({
  id: Math.random(),
  name,
  price,
  image,
  quantity: 1,
})}
  className=" cursor-pointer  mt-5 inline-flex items-center justify-center px-6 py-2.5 bg-neutral-900 text-white text-sm sm:text-base font-medium rounded-full shadow-md hover:bg-neutral-800 hover:shadow-lg transition-all duration-300"
>
  Add to Cart
</button>

      </div>
    </div>
  );
}
