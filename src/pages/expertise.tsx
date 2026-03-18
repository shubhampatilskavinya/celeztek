import type { NextPage } from "next";
import FadeIn from "~/components/FadeIn";
import {
  Plane,
  Cog,
  Cpu,
  Lightbulb,
  Layers,
  Rocket,
} from "lucide-react";

const expertiseAreas = [
  {
    icon: Plane,
    title: "Aerospace Engineering",
    description:
      "We design, build, and test next-generation aircraft, spacecraft, and propulsion systems. From concept to flight-ready hardware, we deliver high-performance engineering for the skies and beyond.",
    features: [
      "Propulsion Systems",
      "Structural Analysis",
      "Flight Testing",
      "Avionics Integration",
    ],
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description:
      "We design advanced mechanical systems, custom machinery, and automation solutions built for precision, durability, and scalability.",
    features: [
      "Custom Machinery",
      "Automation Systems",
      "Product Development",
      "Tooling Design",
    ],
  },
  {
    icon: Cpu,
    title: "Electronics Engineering",
    description:
      "We design intelligent electronic systems that drive modern technology forward. From embedded hardware to advanced control solutions, our engineering powers precision, reliability, and innovation.",
    features: [
      "Embedded Systems",
      "Control Solutions",
      "PCB Design",
      "Sensor Integration",
    ],
  },
  {
    icon: Lightbulb,
    title: "Research & Development",
    description:
      "Our R&D team pushes the boundaries of what is possible, developing innovative solutions and next-generation technologies for emerging applications.",
    features: [
      "Prototyping",
      "Feasibility Studies",
      "Material Science",
      "Testing & Validation",
    ],
  },
  {
    icon: Layers,
    title: "Systems Integration",
    description:
      "We bring together mechanical, electrical, and software systems into unified, high-performance solutions that work seamlessly across complex environments.",
    features: [
      "PLC Programming",
      "HMI Design",
      "SCADA Systems",
      "Network Architecture",
    ],
  },
  {
    icon: Rocket,
    title: "Defense & Space",
    description:
      "Supporting national defense and space exploration with mission-critical engineering solutions that meet the highest standards of reliability and performance.",
    features: [
      "Military Standards",
      "Space Qualification",
      "Security Clearance",
      "ITAR Compliance",
    ],
  },
];

const ExpertisePage: NextPage = () => {
  return (
    <>
      <section className="bg-slate-950 pb-16 pt-32">
        <div className="mx-auto max-w-7xl px-4">
          <FadeIn>
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              What We Do
            </span>
            <h1 className="mt-3 mb-4 text-4xl font-bold text-white md:text-5xl">
              Our Expertise
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Decades of experience across multiple engineering disciplines,
              delivering solutions that push the boundaries of innovation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {expertiseAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.08}>
                <div className="group h-full rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <area.icon size={28} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-slate-600">
                    {area.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {area.features.map((feature) => (
                      <span
                        key={feature}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                      >
                        {feature}
                      </span>
                    ))}
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

export default ExpertisePage;