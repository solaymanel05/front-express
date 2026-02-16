import Hero from "@/components/hero";
import ProductCard from "../components/ProductCard";

import About from "@/app/about/page";

async function getProducts() {
  const res = await fetch("http://localhost:5000/api/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <Hero/>
      
      <About/>
      {/* Main content */}
      <main className="p-6 bg-[#ffff]">
        <h2 className="text-4xl pb-9 font-extralight- mb-6 text-neutral-900 text-center">Our Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <ProductCard
              key={p.id}
              name={p.name}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
