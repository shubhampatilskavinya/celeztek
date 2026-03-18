import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <span className="text-lg font-bold text-white">C</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Celeztek</span>
            </div>

            <p className="text-sm leading-relaxed text-slate-300">
              Innovative engineering solutions for aerospace, defense,
              manufacturing, and beyond.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-2">
              {[
                { label: "Expertise", href: "/expertise" },
                { label: "Capabilities", href: "/capabilities" },
                { label: "Industries", href: "/industries" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-300 transition-colors hover:text-blue-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Services
            </h4>

            <div className="flex flex-col gap-2">
              {[
                "Precision Machining",
                "Automation Systems",
                "Fabrication & Welding",
                "Repair & Rebuild",
                "Engineering & Controls",
              ].map((item) => (
                <span key={item} className="text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Contact
            </h4>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:info@celeztek.com"
                className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-blue-400"
              >
                <Mail size={16} />
                info@celeztek.com
              </a>

              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-blue-400"
              >
                <Phone size={16} />
                +91-XXXXXXXXXX
              </a>

              <span className="flex items-center gap-2 text-sm text-slate-300">
                <MapPin size={16} />
                1621 Hillside Avenue, North New Hyde Park, New York 11040, United States
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Celeztek. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-slate-400 transition-colors hover:text-blue-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;