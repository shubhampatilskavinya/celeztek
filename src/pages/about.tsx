import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <>
      <section className="bg-slate-950 pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            About
          </span>

          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            A team built for complex engineering delivery
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            Highly skilled engineers focused on designing and building
            innovative solutions for multiple industries.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                What we do
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Custom machinery, automation systems, product development,
                machining, fabrication, and rebuild services.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                How we work
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Clear requirements, disciplined design, certified processes, and
                testing-driven delivery.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">
                What you get
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Reliable engineering outcomes, predictable timelines, and
                manufacturing-ready solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;