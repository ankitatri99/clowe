export default function AITryOnBanner() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-3xl border border-yellow-500 bg-gradient-to-r from-zinc-900 to-black p-12">

          <div className="grid items-center gap-12 md:grid-cols-2">

            <div>

              <p className="text-yellow-500 font-semibold tracking-widest">
                AI POWERED
              </p>

              <h2 className="mt-4 text-5xl font-bold text-white">
                Try Before You Buy
              </h2>

              <p className="mt-6 text-zinc-300 leading-8">
                Upload your photo, enter your height and weight,
                generate your AI fashion preview,
                then purchase confidently with fewer returns.
              </p>

              <button className="mt-10 rounded-xl bg-yellow-500 px-8 py-4 font-bold text-black hover:bg-yellow-400">
                Start AI Try-On
              </button>

            </div>

            <div>

              <div className="flex h-[420px] items-center justify-center rounded-3xl border border-zinc-700 bg-zinc-900">

                <p className="text-center text-zinc-400">
                  AI Preview Image
                  <br />
                  (Coming Soon)
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}