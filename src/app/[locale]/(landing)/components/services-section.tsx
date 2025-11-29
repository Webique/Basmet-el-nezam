"use client";

import {
  Briefcase,
  Building2,
  FileText,
  Gavel,
  Handshake,
  Scale,
  ShieldCheck,
  Users
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ServicesSection() {
  const t = useTranslations("LandingPage.services");

  const services = [
    {
      icon: Briefcase,
      title: t("corporate.title"),
      description: t("corporate.description")
    },
    {
      icon: Gavel,
      title: t("litigation.title"),
      description: t("litigation.description")
    },
    {
      icon: FileText,
      title: t("pleadings.title"),
      description: t("pleadings.description")
    },
    {
      icon: Users,
      title: t("consultation.title"),
      description: t("consultation.description")
    },
    {
      icon: Scale,
      title: t("arbitration.title"),
      description: t("arbitration.description")
    },
    {
      icon: Handshake,
      title: t("debt.title"),
      description: t("debt.description")
    },
    {
      icon: Building2,
      title: t("government.title"),
      description: t("government.description")
    },
    {
      icon: ShieldCheck,
      title: t("bankruptcy.title"),
      description: t("bankruptcy.description")
    }
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-linear-to-b from-gray-50 to-white py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/patterns/5.png"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      {/* Decorative Elements */}
      <m.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="bg-primary/5 absolute start-0 top-1/4 h-96 w-96 rounded-full blur-3xl"
      />
      <m.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 4, delay: 1, repeat: Infinity }}
        className="absolute bottom-1/4 end-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold"
          >
            {t("title")}
          </m.div>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            {t("subtitle")}
          </h2>
        </m.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-2xl"
              >
                {/* Background gradient on hover */}
                <m.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="from-primary/5 to-transparent absolute inset-0 bg-linear-to-br"
                />

                {/* Icon */}
                <m.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <div className="bg-primary inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    <Icon className="text-primary-foreground h-8 w-8" />
                  </div>
                </m.div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <m.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="from-primary to-primary/50 absolute bottom-0 start-0 h-1 bg-linear-to-r"
                />

                {/* Shine effect */}
                <m.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
                />
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
