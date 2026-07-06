const categories = [
  {
    name: "Men",
    image: "/images/categories/men.jpg",
  },
  {
    name: "Women",
    image: "/images/categories/women.jpg",
  },
  {
    name: "Kids",
    image: "/images/categories/kids.jpg",
  },
  {
    name: "Luxury",
    image: "/images/categories/luxury.jpg",
  },
];

export default function Categories() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold text-white">
          Shop by Category
        </h2>

        <p className="mt-4 text-center text-zinc-400">
          Discover premium collections designed for everyone.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-4">

          {categories.map((category) => (

            <div
              key={category.name}
              className="overflow-hidden rounded-3xl bg-zinc-900 transition hover:scale-105"
            >

              <div className="h-80 bg-zinc-800"></div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-white">
                  {category.name}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}