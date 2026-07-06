const products = [
  {
    id: 1,
    name: "Luxury Black Hoodie",
    price: "₹2,499",
  },
  {
    id: 2,
    name: "Premium Oversized T-Shirt",
    price: "₹1,499",
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    price: "₹3,499",
  },
  {
    id: 4,
    name: "Streetwear Cargo Pants",
    price: "₹2,999",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Trending Products
        </h2>

        <p className="mt-4 text-center text-zinc-500">
          Shop the latest premium collection from CLOWE.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-3xl border bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="h-80 bg-zinc-200"></div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{product.name}</h3>

                <p className="mt-3 text-2xl font-bold text-yellow-600">
                  {product.price}
                </p>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 rounded-xl border py-3 font-semibold">
                    AI Try
                  </button>

                  <button className="flex-1 rounded-xl bg-black py-3 font-semibold text-white">
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}