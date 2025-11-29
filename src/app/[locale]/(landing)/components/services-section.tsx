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
  const t = useTranslations("IndexPage.services");

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
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <ExportedImage
          src="/images/patterns/5.png"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

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
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-5 py-2 text-sm font-semibold"
          >
            {t("title")}
          </m.div>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            {t("subtitle")}
          </h2>
        </m.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                {/* Icon */}
                <div className="mb-5">
                  <div className="bg-primary inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-md transition-all duration-300 group-hover:scale-105">
                    <Icon className="text-primary-foreground h-7 w-7" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="group-hover:text-primary mb-3 text-lg font-bold text-gray-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <m.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="bg-primary absolute bottom-0 start-0 h-1"
                />
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
