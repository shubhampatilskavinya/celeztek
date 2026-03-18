import FadeIn from "~/components/FadeIn";
import { Plane, Cog, Cpu } from "lucide-react";

const expertiseCards = [
  {
    icon: Plane,
    title: "Aerospace",
    description:
      "We design, build, and test next-generation aircraft, spacecraft, and propulsion systems. From concept to flight-ready hardware, we deliver high-performance engineering for the skies and beyond.",
  },
  {
    icon: Cog,
    title: "Mechanical",
    description:
      "We design advanced mechanical systems, custom machinery, and automation solutions built for precision, durability, and scalability.",
  },
  {
    icon: Cpu,
    title: "Electronics",
    description:
      "We design intelligent electronic systems that drive modern technology forward. From embedded hardware to advanced control solutions, our engineering powers precision, reliability, and innovation.",
  },
];

const ExpertiseSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <FadeIn>
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              What We Do
            </span>
            <h2 className="mt-3 mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
              Our Expertise
            </h2>
            <p className="leading-relaxed text-slate-600">
              Our team consists of highly skilled mechanical engineers with many
              years of experience in designing and building innovative solutions
              for various industries. We specialize in custom machinery,
              automation systems, and product development.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {expertiseCards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div className="group rounded-xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-blue-200 hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <card.icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-600">
                  {card.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;