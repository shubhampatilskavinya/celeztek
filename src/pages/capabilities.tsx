import type { NextPage } from "next";
import FadeIn from "~/components/FadeIn";
import {
  Factory,
  Truck,
  Target,
  Shield,
  Wrench,
  Settings,
} from "lucide-react";

const capabilities = [
  {
    icon: Factory,
    title: "High-Capacity Manufacturing Support",
    description:
      "With over 25,000 contract manufacturing hours available each month, we provide the scale, speed, and reliability needed to keep your production running smoothly and efficiently.",
  },
  {
    icon: Truck,
    title: "Heavy Equipment Builds",
    description:
      "We specialize in designing and building large-scale custom automation systems up to 50 feet long and 75,000 lbs, delivering durable, high-performance machinery tailored to your operation.",
  },
  {
    icon: Target,
    title: "Precision Machining Capabilities",
    description:
      "From complex components to oversized parts, our advanced machining services include turning, milling, grinding, and wire EDM, ensuring tight tolerances and exceptional accuracy.",
  },
  {
    icon: Shield,
    title: "Certified Fabrication & Welding Expertise",
    description:
      "Our fabrication and welding teams produce structural assemblies, tooling, and critical components to the highest standards, meeting AWS, ASME, and NAVSEA requirements.",
  },
  {
    icon: Wrench,
    title: "Complete Repair & Rebuild Services",
    description:
      "We restore and upgrade industrial equipment through full teardowns, rebuilds, modernization, and testing, extending machine life and improving performance.",
  },
  {
    icon: Settings,
    title: "Integrated Engineering & Controls Solutions",
    description:
      "Our in-house engineering support includes SolidWorks design, reverse engineering, panel wiring, and PLC/HMI programming, offering complete automation and controls integration from start to finish.",
  },
];

const CapabilitiesPage: NextPage = () => {
  return (
    <>
      <section className="bg-slate-950 pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              What We Offer
            </span>
            <h1 className="mt-3 mb-4 text-4xl font-bold text-white md:text-5xl">
              Our Capabilities
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              End-to-end engineering and manufacturing capabilities to support
              your most demanding projects.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="space-y-8">
            {capabilities.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.08}>
                <div className="group flex flex-col gap-6 rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-xl md:flex-row">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <cap.icon size={32} />
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-bold text-slate-900">
                      {cap.title}
                    </h3>
                    <p className="leading-relaxed text-slate-600">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CapabilitiesPage;