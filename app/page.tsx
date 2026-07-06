export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          INDIA'S FIRST AI FASHION PLATFORM
        </p>

        <h1 className="text-6xl font-extrabold tracking-tight text-gray-900">
          CLOWE
        </h1>

        <h2 className="mt-6 text-4xl font-bold text-gray-800">
          See Yourself Before You Buy
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Upload your photo, enter your height and weight, try clothes with AI,
          and shop with confidence.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl bg-black px-8 py-4 font-semibold text-white transition hover:bg-gray-800">
            Shop Now
          </button>

          <button className="rounded-xl border border-gray-300 px-8 py-4 font-semibold hover:bg-gray-100">
            Try AI
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-10 text-center">
          <div>
            <h3 className="text-3xl font-bold">10K+</h3>
            <p className="text-gray-500">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">500+</h3>
            <p className="text-gray-500">Premium Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">AI</h3>
            <p className="text-gray-500">Virtual Try-On</p>
          </div>
        </div>

      </section>
    </main>
  );
}