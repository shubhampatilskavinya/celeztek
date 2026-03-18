import type { NextPage } from "next";
import FadeIn from "~/components/FadeIn";
import { Plane, Factory, Anchor, Bot, HardHat } from "lucide-react";

const industries = [
  {
    icon: Plane,
    name: "Aerospace",
    description:
      "Engineering precision components and systems for commercial and military aviation, satellite systems, and space exploration missions.",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Custom machinery, tooling, and automation solutions that drive efficiency and productivity across diverse manufacturing environments.",
  },
  {
    icon: Anchor,
    name: "Defense / Naval",
    description:
      "Mission-critical engineering for naval vessels, defense systems, and military applications meeting stringent government requirements.",
  },
  {
    icon: Bot,
    name: "Automation & Robotics",
    description:
      "Intelligent automation systems, robotic integrations, and control solutions that transform operations and drive innovation.",
  },
  {
    icon: HardHat,
    name: "Heavy Industry",
    description:
      "Large-scale equipment, structural fabrication, and heavy machinery engineering for mining, energy, and industrial applications.",
  },
];

const IndustriesPage: NextPage = () => {
  return (
    <>
      <section className="bg-slate-950 pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Sectors
            </span>
            <h1 className="mt-3 mb-4 text-4xl font-bold text-white md:text-5xl">
              Industries We Serve
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Delivering engineering excellence across the most demanding
              sectors.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.08}>
                <div className="group h-full rounded-xl border border-slate-200 bg-white p-8 text-center transition-all duration-300 hover:border-blue-200 hover:shadow-xl">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <ind.icon size={36} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {ind.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {ind.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPage;