
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full border border-yellow-500 px-4 py-2 text-sm text-yellow-500">
          INDIA'S FIRST AI FASHION PLATFORM
        </span>

        <h1 className="mt-8 text-6xl font-black tracking-wide md:text-8xl">
          CLOWE
        </h1>

        <h2 className="mt-6 text-3xl font-semibold md:text-5xl">
          See Yourself Before You Buy
        </h2>

        <p className="mt-8 max-w-3xl text-lg text-zinc-300">
          Upload your photo, enter your height and weight,
          try clothes using AI, and buy only what truly fits you.
        </p>

        <div className="mt-12 flex gap-6">
          <button className="rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400">
            Start AI Try-On
          </button>

          <button className="rounded-xl border border-white px-8 py-4">
            Shop Collection
          </button>
        </div>

      </div>
    </section>
  );
}