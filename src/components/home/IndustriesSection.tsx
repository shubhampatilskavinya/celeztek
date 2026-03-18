import FadeIn from "~/components/FadeIn";
import { Plane, Factory, Anchor, Bot, HardHat } from "lucide-react";

const industries = [
  { icon: Plane, name: "Aerospace" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Anchor, name: "Defense / Naval" },
  { icon: Bot, name: "Automation & Robotics" },
  { icon: HardHat, name: "Heavy Industry" },
];

const IndustriesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Sectors
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Industries We Serve
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((ind, i) => (
            <FadeIn key={ind.name} delay={i * 0.08}>
              <div className="group flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 text-center transition-all duration-300 hover:border-blue-200 hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <ind.icon size={28} />
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  {ind.name}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;