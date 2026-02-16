"use client";

export default function About() {
  const images =  "/hero.png"
  return (
    <section className="bg-white pb-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative">
          <img
            src={images}
            alt="About Express Store"
            className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">Trusted by Customers</p>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">
            About Express Store
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-6">
            Express Store is a modern e-commerce platform built to deliver a
            fast, reliable, and simple shopping experience. Our mission is to
            provide high-quality products at competitive prices while ensuring
            customer satisfaction at every step.
          </p>

          <p className="text-neutral-600 leading-relaxed mb-8">
            We focus on efficiency, secure ordering, and quick delivery across
            Morocco. With WhatsApp ordering and responsive customer support,
            shopping has never been easier.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                Fast Delivery
              </h4>
              <p className="text-sm text-neutral-600">
                Quick shipping and reliable logistics across Morocco.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                Quality Products
              </h4>
              <p className="text-sm text-neutral-600">
                Carefully selected items with guaranteed quality.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                Secure Ordering
              </h4>
              <p className="text-sm text-neutral-600">
                Safe and smooth checkout process.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                Customer Support
              </h4>
              <p className="text-sm text-neutral-600">
                Responsive assistance via WhatsApp and email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
