"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function PortfolioSection() {
  const t = useTranslations("LandingPage.portfolio");

  const cases = [
    {
      image: "/images/6.png",
      title: t("case1.title"),
      category: t("case1.category")
    },
    {
      image: "/images/8.png",
      title: t("case2.title"),
      category: t("case2.category")
    },
    {
      image: "/images/9.png",
      title: t("case3.title"),
      category: t("case3.category")
    },
    {
      image: "/images/0.png",
      title: t("case4.title"),
      category: t("case4.category")
    }
  ];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <ExportedImage
          src="/images/patterns/2.png"
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
          <p className="text-lg text-gray-600">{t("description")}</p>
        </m.div>

        {/* Cases Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {cases.map((caseItem, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl ring-2 ring-gray-200 transition-all duration-300 hover:ring-primary/30 hover:shadow-2xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <m.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <ExportedImage
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover transition-transform duration-700"
                  />
                </m.div>
                <m.div
                  initial={{ opacity: 0.6 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="from-secondary/90 via-secondary/70 to-secondary/40 absolute inset-0 bg-linear-to-t"
                />

                {/* Shine overlay */}
                <m.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                />
              </div>

              <m.div
                initial={{ y: 20, opacity: 0.9 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-0 start-0 end-0 p-6 text-white"
              >
                <m.div
                  initial={{ scale: 0.9 }}
                  whileHover={{ scale: 1 }}
                  className="bg-primary mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold shadow-lg"
                >
                  {caseItem.category}
                </m.div>
                <h3 className="text-xl font-bold lg:text-2xl drop-shadow-lg">
                  {caseItem.title}
                </h3>
              </m.div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
