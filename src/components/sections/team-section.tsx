"use client";

import { CheckCircle } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function TeamSection() {
  const t = useTranslations("LandingPage.team");

  const expertise = [
    t("expertise1"),
    t("expertise2"),
    t("expertise3"),
    t("expertise4"),
    t("expertise5")
  ];

  return (
    <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/tool/11.png"
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
        className="absolute left-0 top-0 h-full w-1/3"
      >
        <ExportedImage
          src="/images/shapes-from-the-pdf/برزنتيشن بصمة النظام (1).pdf-image-031 copy.png"
          alt=""
          fill
          className="object-contain"
        />
      </m.div>

      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-primary/10 text-primary inline-block rounded-full px-4 py-2 text-sm font-semibold"
              >
                {t("title")}
              </m.div>

              <h2 className="text-secondary-foreground text-4xl font-bold lg:text-5xl">
                {t("subtitle")}
              </h2>

              <p className="text-lg leading-relaxed text-gray-300">
                {t("description")}
              </p>

              <p className="text-lg leading-relaxed text-gray-300">
                {t("description2")}
              </p>
            </div>

            {/* Expertise List */}
            <div className="space-y-4">
              {expertise.map((item, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="group flex items-center gap-3 rounded-lg p-2 transition-all duration-300 hover:bg-white/5"
                >
                  <m.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-lg ring-2 ring-primary/30"
                  >
                    <CheckCircle className="text-primary-foreground h-5 w-5" />
                  </m.div>
                  <span className="text-secondary-foreground text-lg font-medium transition-colors group-hover:text-primary">
                    {item}
                  </span>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Image */}
          <m.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative perspective-1000"
          >
            <m.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl ring-4 ring-primary/20"
            >
              <ExportedImage
                src="/images/tool/12.png"
                alt="Legal Team"
                fill
                className="object-cover"
              />
              <m.div
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="from-secondary/60 via-secondary/40 to-secondary/50 absolute inset-0 bg-linear-to-t"
              />

              {/* Glow effect */}
              <m.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="from-primary/30 to-transparent absolute inset-0 bg-linear-to-br"
              />
            </m.div>

            {/* Floating Badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="absolute -bottom-6 -right-6 rounded-2xl border-2 border-white/30 bg-white/95 p-6 shadow-2xl backdrop-blur-sm ring-2 ring-primary/20"
            >
              <m.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center"
              >
                <div className="text-primary mb-1 text-4xl font-bold">15+</div>
                <div className="text-sm font-medium text-gray-600">
                  Years Experience
                </div>
              </m.div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
