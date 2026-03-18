import type { ReactNode } from "react";

type SectionProps = {
  kicker?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

const Section = ({ kicker, title, subtitle, children }: SectionProps) => {
  return (
    <>
      <section className="bg-slate-950 pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4">
          {kicker ? (
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              {kicker}
            </span>
          ) : null}

          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-white md:text-5xl">
            {title}
          </h1>

          {subtitle ? (
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              {subtitle}
            </p>
          ) : null}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">{children}</div>
      </section>
    </>
  );
};

export default Section;