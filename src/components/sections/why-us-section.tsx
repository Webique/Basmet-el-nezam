"use client";

import { Award, Clock, Shield, TrendingUp } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function WhyUsSection() {
  const t = useTranslations("LandingPage.whyUs");

  const features = [
    {
      icon: Award,
      title: t("expertise.title"),
      description: t("expertise.description")
    },
    {
      icon: Shield,
      title: t("trust.title"),
      description: t("trust.description")
    },
    {
      icon: TrendingUp,
      title: t("results.title"),
      description: t("results.description")
    },
    {
      icon: Clock,
      title: t("support.title"),
      description: t("support.description")
    }
  ];

  return (
    <section className="bg-secondary relative overflow-hidden py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/shapes-from-the-pdf/03fcab85-0d54-4bff-a3d1-2c44de322d19-0040.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* Additional PDF Shape */}
      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute right-0 top-1/4 h-1/2 w-1/3"
      >
        <ExportedImage
          src="/images/shapes-from-the-pdf/برزنتيشن بصمة النظام (1).pdf-image-043.png"
          alt=""
          fill
          className="object-contain"
        />
      </m.div>

      {/* Decorative Elements */}
      <m.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="bg-primary/10 absolute right-0 top-0 h-96 w-96 rounded-full blur-3xl"
      />
      <m.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 4, delay: 1, repeat: Infinity }}
        className="bg-primary/10 absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
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

          <h2 className="text-secondary-foreground mb-4 text-4xl font-bold lg:text-5xl">
            {t("subtitle")}
          </h2>
        </m.div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <m.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="hover:border-primary/50 relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  {/* Background glow on hover */}
                  <m.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="from-primary/20 to-transparent absolute inset-0 bg-linear-to-br"
                  />

                  {/* Icon */}
                  <m.div
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ring-2 ring-primary/30"
                  >
                    <Icon className="text-primary-foreground h-8 w-8" />
                  </m.div>

                  {/* Content */}
                  <h3 className="text-secondary-foreground mb-3 text-xl font-bold">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-gray-300">
                    {feature.description}
                  </p>

                  {/* Hover Glow */}
                  <m.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="from-primary/0 via-primary/50 to-primary/0 bg-linear-to-r absolute -inset-px rounded-2xl blur"
                  />
                </m.div>
              </m.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm lg:p-12">
            <div className="mb-6 flex justify-center">
              <div className="bg-primary flex h-20 w-20 items-center justify-center rounded-full shadow-2xl">
                <svg
                  className="text-primary-foreground h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-secondary-foreground mb-4 text-2xl font-bold lg:text-3xl">
              Licensed & Certified Law Firm
            </h3>
            <p className="text-lg text-gray-300">
              Fully licensed and regulated by Saudi authorities, ensuring the
              highest standards of legal practice and client protection.
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
}
