"use client";

import { Award, Eye, Heart, Lightbulb, Lock, Target } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ValuesSection() {
  const t = useTranslations("LandingPage.values");

  const values = [
    { icon: Heart, label: t("values.integrity") },
    { icon: Lock, label: t("values.confidentiality") },
    { icon: Target, label: t("values.commitment") },
    { icon: Award, label: t("values.efficiency") },
    { icon: Lightbulb, label: t("values.innovation") }
  ];

  return (
    <section className="bg-linear-to-b relative overflow-hidden from-gray-50 to-white py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/patterns/3.png"
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
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-4 py-2 text-sm font-semibold"
          >
            {t("title")}
          </m.div>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            {t("subtitle")}
          </h2>
        </m.div>

        {/* Vision, Mission, Values Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Vision */}
          <m.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-linear-to-br from-primary/5 hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            {/* Background glow on hover */}
            <m.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent"
            />
            <m.div
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="bg-primary ring-primary/30 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ring-2"
            >
              <Eye className="text-primary-foreground h-8 w-8" />
            </m.div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              {t("vision.title")}
            </h3>
            <p className="leading-relaxed text-gray-600">
              {t("vision.description")}
            </p>
          </m.div>

          {/* Mission */}
          <m.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-linear-to-br from-primary/5 hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent"
            />
            <m.div
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="bg-primary ring-primary/30 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ring-2"
            >
              <Target className="text-primary-foreground h-8 w-8" />
            </m.div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              {t("mission.title")}
            </h3>
            <p className="leading-relaxed text-gray-600">
              {t("mission.description")}
            </p>
          </m.div>

          {/* Values */}
          <m.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-linear-to-br from-primary/5 hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 to-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
          >
            <m.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="from-primary/10 bg-linear-to-br absolute inset-0 to-transparent"
            />
            <m.div
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="bg-primary ring-primary/30 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg ring-2"
            >
              <Award className="text-primary-foreground h-8 w-8" />
            </m.div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              {t("values.title")}
            </h3>
            <div className="space-y-3">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, scale: 1.02 }}
                    className="group/item hover:bg-primary/5 flex items-center gap-3 rounded-lg p-2 transition-all duration-300"
                  >
                    <m.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="bg-primary/10 ring-primary/20 flex h-8 w-8 items-center justify-center rounded-lg ring-1"
                    >
                      <Icon className="text-primary h-4 w-4" />
                    </m.div>
                    <span className="group-hover/item:text-primary font-medium text-gray-700 transition-colors">
                      {value.label}
                    </span>
                  </m.div>
                );
              })}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
