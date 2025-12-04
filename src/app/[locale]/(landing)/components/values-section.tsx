"use client";

import { Award, Eye, Target } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function ValuesSection() {
  const t = useTranslations("IndexPage.values");

  return (
    <section className="relative overflow-hidden bg-gray-50 py-20 lg:py-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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
          <h2 className="mb-4 text-4xl font-bold text-primary lg:text-5xl">
            {t("title")}
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
            whileHover={{ y: -5 }}
            className="hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="bg-primary mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-md">
              <Eye className="text-primary-foreground h-7 w-7" />
            </div>
            <h3 className="group-hover:text-primary mb-4 text-xl font-bold text-gray-900 transition-colors">
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
            whileHover={{ y: -5 }}
            className="hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="bg-primary mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-md">
              <Target className="text-primary-foreground h-7 w-7" />
            </div>
            <h3 className="group-hover:text-primary mb-4 text-xl font-bold text-gray-900 transition-colors">
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
            whileHover={{ y: -5 }}
            className="hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg"
          >
            <div className="bg-primary mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl shadow-md">
              <Award className="text-primary-foreground h-7 w-7" />
            </div>
            <h3 className="group-hover:text-primary mb-3 text-xl font-bold text-gray-900 transition-colors">
              {t("values.title")}
            </h3>
            <p className="leading-relaxed text-gray-600">
              {t("values.description")}
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}
