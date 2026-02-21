"use client";

export default function About() {
  const images = "/hero.png";

  return (
    <section className="bg-white pb-20 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* الصورة */}
        <div className="relative">
          <img
            src={images}
            alt="حول متجر إكسبريس"
            className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white px-6 py-4 rounded-xl shadow-lg">
            <p className="text-lg font-semibold">موثوق من طرف عملائنا</p>
          </div>
        </div>

        {/* المحتوى */}
        <div>
          <h2 className="text-4xl font-extrabold text-neutral-900 mb-6">
            من نحن
          </h2>

          <p className="text-neutral-600 leading-relaxed mb-6">
            متجر إكسبريس هو منصة تسوق إلكتروني عصرية تهدف إلى تقديم تجربة
            سريعة، موثوقة وسهلة. نسعى لتوفير منتجات عالية الجودة بأسعار
            تنافسية مع ضمان رضا العملاء في كل خطوة.
          </p>

          <p className="text-neutral-600 leading-relaxed mb-8">
            نركز على السرعة في التنفيذ، أمان الطلبات، والتوصيل السريع إلى جميع
            مدن المغرب. مع إمكانية الطلب عبر واتساب وخدمة عملاء متجاوبة،
            أصبح التسوق أسهل من أي وقت مضى.
          </p>

          {/* المميزات */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                توصيل سريع
              </h4>
              <p className="text-sm text-neutral-600">
                شحن سريع وخدمة توصيل موثوقة في جميع أنحاء المغرب.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                منتجات بجودة عالية
              </h4>
              <p className="text-sm text-neutral-600">
                اختيار دقيق للمنتجات مع ضمان الجودة.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                طلب آمن
              </h4>
              <p className="text-sm text-neutral-600">
                عملية شراء آمنة وسلسة بدون تعقيد.
              </p>
            </div>

            <div className="p-4 bg-amber-50 rounded-xl">
              <h4 className="font-semibold text-neutral-900 mb-2">
                دعم العملاء
              </h4>
              <p className="text-sm text-neutral-600">
                دعم سريع ومتجاوب عبر واتساب والبريد الإلكتروني.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
