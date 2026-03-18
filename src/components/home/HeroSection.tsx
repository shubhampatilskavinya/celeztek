import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Hero/hero-bg.jpg"
          alt="Engineering technology background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-slate-950/80" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-20">
        <div className="max-w-2xl">
          <span className="mb-6 inline-block rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-300">
            Engineering Excellence Since Day One
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Innovative Engineering <span className="text-blue-400">Solutions</span>
          </h1>

          <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Your source for advanced mechanical components and tools. Precision
            engineering for aerospace, defense, and industrial applications.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Get a Quote
            </Link>

            <Link
              href="/capabilities"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/30 bg-transparent px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;