"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.about");

  const stats = [
    { value: "15+", label: t("experience") },
    { value: "500+", label: t("cases") },
    { value: "1000+", label: t("clients") },
    { value: "25+", label: t("awards") }
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute end-0 top-0 h-full w-1/2 opacity-5">
        <ExportedImage
          src="/images/patterns/3.png"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 h-1/2 w-1/3"
      >
        <ExportedImage
          src="/images/patterns/4.png"
          alt="pattern"
          fill
          className="object-contain"
        />
      </m.div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Images Grid */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, z: 10 }}
                  className="ring-primary/20 relative aspect-square overflow-hidden rounded-2xl shadow-xl ring-2"
                >
                  <ExportedImage
                    src="/images/1.png"
                    alt="Law Office"
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="from-primary/20 bg-linear-to-t absolute inset-0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </m.div>
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="ring-primary/20 relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-2"
                >
                  <ExportedImage
                    src="/images/4.png"
                    alt="Legal Books"
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </m.div>
              </div>
              <div className="space-y-4 pt-8">
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="ring-primary/20 relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-2"
                >
                  <ExportedImage
                    src="/images/13.png"
                    alt="Consultation"
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </m.div>
                <m.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="ring-primary/20 relative aspect-square overflow-hidden rounded-2xl shadow-xl ring-2"
                >
                  <ExportedImage
                    src="/images/2.png"
                    alt="Legal Team"
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </m.div>
              </div>
            </div>

            {/* Decorative Element */}
            <m.div
              animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="bg-primary/10 absolute -bottom-6 -end-6 -z-10 h-64 w-64 rounded-full blur-3xl"
            />
          </m.div>

          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/15 text-primary border-primary/20 inline-block rounded-full border px-5 py-2.5 text-sm font-bold shadow-sm"
              >
                {t("title")}
              </m.div>

              <h2 className="text-4xl font-extrabold text-gray-900 lg:text-5xl">
                {t("subtitle")}
              </h2>

              <p className="text-lg leading-relaxed text-gray-600">
                {t("description")}
              </p>
              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-lg leading-relaxed text-gray-600"
              >
                {t("description2")}
              </m.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-linear-to-br hover:border-primary/20 rounded-2xl border border-gray-200/50 from-white to-gray-50/50 p-6 shadow-md transition-all duration-300 hover:shadow-xl"
                >
                  <div className="text-primary text-3xl font-extrabold lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm font-semibold text-gray-700">
                    {stat.label}
                  </div>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
