// app/page.tsx
import Hero from "@/components/hero";
import ProductCard from "@/components/ProductCard";
import About from "@/app/about/page";

// ✅ Define getProducts inside the same file or import it
async function getProducts() {
  try {
    const res = await fetch(
      "https://express-store-production.up.railway.app/api/products",
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status, res.statusText);
      return []; // return empty array on error
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching products:", err);
    return [];
  }
}

export default async function Home() {
  // ✅ Call getProducts
  const products = await getProducts();

  return (
    <div>
      <Hero />
      <About />

      <main className="p-6 bg-[#ffff]">
        <h2 className="text-4xl pb-9 font-extralight mb-6 text-neutral-900 text-center">
          Our Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p: any) => (
            <ProductCard
              key={p.id}
              id={p.id}
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
