"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.about");

  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50">
      {/* Row 1 */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute end-0 top-0 hidden h-full w-1/2 opacity-5 md:block">
          <ExportedImage
            src="/images/patterns/3.png"
            alt="pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto grid items-stretch gap-8 px-4 py-12 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-last lg:order-first"
          >
            <m.div className="ring-primary/20 group relative h-64 overflow-hidden rounded-2xl shadow-xl ring-2 sm:h-80 lg:h-[600px]">
              <ExportedImage
                src="/images/about.png"
                alt="Law Office"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/15 text-primary border-primary/20 inline-block rounded-full border px-4 py-2 text-xs font-bold shadow-sm sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {t("title")}
              </m.div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-5xl">
                {t("subtitle")}
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {t("description")}
              </p>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {t("description2")}
              </p>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {t("description3")}
              </p>
            </div>
          </m.div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative overflow-hidden bg-gray-50">
        {/* Background Pattern */}
        <div className="absolute start-0 top-0 hidden h-full w-1/2 opacity-5 md:block">
          <ExportedImage
            src="/images/patterns/3.png"
            alt="pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto grid items-stretch gap-8 px-4 py-12 sm:gap-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-32">
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative order-last"
          >
            <m.div className="ring-primary/20 group relative h-64 overflow-hidden rounded-2xl shadow-xl ring-2 sm:h-80 lg:h-[600px]">
              <ExportedImage
                src="/images/about-2.png"
                alt="Legal Team"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </m.div>
          </m.div>

          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4 sm:space-y-6"
          >
            <div className="space-y-3 sm:space-y-4">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/15 text-primary border-primary/20 inline-block rounded-full border px-4 py-2 text-xs font-bold shadow-sm sm:px-5 sm:py-2.5 sm:text-sm"
              >
                {t("title2")}
              </m.div>
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-5xl">
                {t("subtitle2")}
              </h2>
              <p className="rtl text-right text-base leading-relaxed text-gray-600 sm:text-lg">
                {t("description4")}
              </p>
              <p className="rtl text-right text-base leading-relaxed text-gray-600 sm:text-lg">
                {t("description5")}
              </p>
              <p className="rtl text-right text-base leading-relaxed text-gray-600 sm:text-lg">
                {t("description6")}
              </p>
              <p className="rtl text-right text-base leading-relaxed text-gray-600 sm:text-lg">
                {t("description7")}
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
