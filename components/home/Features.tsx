
export default function Features() {
  const features = [
    {
      title: "AI Try-On",
      description: "Upload your photo and preview outfits before purchasing.",
    },
    {
      title: "Perfect Fit",
      description: "Height & weight based fitting for better size selection.",
    },
    {
      title: "Fast Delivery",
      description: "Quick shipping across India with live order tracking.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-black">
          Why Choose CLOWE?
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-zinc-200 p-8 shadow-sm transition hover:shadow-xl"
            >
              <h3 className="text-2xl font-bold">{feature.title}</h3>

              <p className="mt-4 text-zinc-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}