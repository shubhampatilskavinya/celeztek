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

const CapabilitiesSection = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Offer
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Our Capabilities
            </h2>
            <p className="leading-relaxed text-slate-600">
              End-to-end engineering and manufacturing capabilities to support
              your most demanding projects.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <FadeIn key={cap.title} delay={i * 0.08}>
              <div className="group h-full rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-blue-200 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <cap.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {cap.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;