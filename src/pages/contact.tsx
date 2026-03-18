import type { NextPage } from "next";
import { useState } from "react";
import {
  Mail,
  Phone,
  Clock3,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Section from "~/components/Section";
import { api } from "~/utils/api";

type FormStatus = "idle" | "loading" | "sent" | "error";

const services = [
  "Machining",
  "Automation",
  "Fabrication & Welding",
  "Repair & Rebuild",
  "Controls / PLC / HMI",
  "Aerospace Engineering",
] as const;

const ContactPage: NextPage = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    mobile: "",
    service: "Machining",
    message: "",
  });

  const sendContactMutation = api.contact.send.useMutation({
    onMutate: () => {
      setStatus("loading");
    },
    onSuccess: () => {
      setStatus("sent");
      setFormData({
        name: "",
        company: "",
        email: "",
        mobile: "",
        service: "Machining",
        message: "",
      });
    },
    onError: () => {
      setStatus("error");
    },
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    if (status === "sent" || status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await sendContactMutation.mutateAsync({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      mobile: formData.mobile,
      service: formData.service,
      message: formData.message,
    });
  };

  return (
    <Section
      kicker="Contact"
      title="Let’s discuss your next engineering project"
      subtitle="Share your scope, timeline, and requirements. Our team reviews the request and responds with a clear plan."
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-6 text-white sm:px-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
                  Request a quote
                </p>
                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Send project details
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
                  Include specs, target quantity, materials, delivery timeline,
                  and any technical notes.
                </p>
              </div>

              <div className="hidden rounded-2xl border border-white/20 bg-white/10 p-3 backdrop-blur sm:block">
                <ArrowRight className="h-6 w-6" />
              </div>
            </div>
          </div>

          <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <Field
                label="Company"
                name="company"
                placeholder="Company name"
                value={formData.company}
                onChange={handleChange}
              />

              <Field
                label="Work email"
                name="email"
                placeholder="name@company.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <Field
                label="Mobile"
                name="mobile"
                placeholder="+91..."
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="service"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Service needed
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              >
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-slate-900"
              >
                Project brief
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[170px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                placeholder="Share specs, scope, target timeline, quantity, materials, compliance requirements, or any reference details..."
              />
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading" || sendContactMutation.isPending}
                className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" || sendContactMutation.isPending
                  ? "Sending..."
                  : "Send request"}
              </button>

              <div className="text-sm">
                {status === "sent" ? (
                  <span className="inline-flex items-center gap-2 font-semibold text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                    Request sent successfully.
                  </span>
                ) : status === "error" ? (
                  <span className="font-semibold text-red-600">
                    Failed to send request.
                  </span>
                ) : (
                  <span className="text-slate-500">
                    Typical response time: within 1 business day.
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
              Direct contact
            </p>
            <h3 className="mt-2 text-2xl font-bold">Talk to our team</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Use the form for detailed project requests, or contact us directly
              for faster coordination.
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="info@celeztek.com"
              />
              <InfoRow
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="+91-XXXXXXXXXX"
              />
              <InfoRow
                icon={<Clock3 className="h-5 w-5" />}
                label="Business Hours"
                value="Mon–Fri, 9:00 am – 5:00 pm"
              />
              <InfoRow
                icon={<MapPin className="h-5 w-5" />}
                label="Location"
                value="1621 Hillside Avenue, North New Hyde Park, New York 11040, United States"
              />
            </div>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">
              Why clients contact us
            </p>

            <div className="mt-5 space-y-4">
              {[
                "Custom machinery and automation builds",
                "Precision machining and oversized components",
                "Fabrication, welding, and structural assemblies",
                "Industrial repair, rebuild, and modernization",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-emerald-50 p-1 text-emerald-600">
                    <CheckCircle2 className="h-4 w-4" />
                  </div>
                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </Section>
  );
};

type FieldProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-slate-900"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
      />
    </div>
  );
}

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="rounded-xl bg-white/10 p-2 text-blue-200">{icon}</div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-white">{value}</p>
      </div>
    </div>
  );
}

export default ContactPage;