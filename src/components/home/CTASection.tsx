import Link from "next/link";
import FadeIn from "~/components/FadeIn";

const CTASection = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <FadeIn>
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Ready to build something{" "}
            <span className="text-blue-600">mission-critical</span>?
          </h2>

          <p className="mx-auto mb-8 max-w-lg text-slate-600">
            Partner with our engineering team and bring your most demanding
            projects to life.
          </p>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Request a Quote
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
            >
              Schedule a Call
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default CTASection;