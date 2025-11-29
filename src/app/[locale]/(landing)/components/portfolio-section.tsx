"use client";

import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function PortfolioSection() {
  const t = useTranslations("IndexPage.portfolio");

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
      className="relative overflow-hidden bg-gray-50 py-20 lg:py-28"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
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
            className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-5 py-2 text-sm font-semibold"
          >
            {t("title")}
          </m.div>

          <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="text-lg text-gray-600">{t("description")}</p>
        </m.div>

        {/* Cases Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {cases.map((caseItem, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <m.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <ExportedImage
                    src={caseItem.image}
                    alt={caseItem.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                </m.div>
                <div className="from-secondary/80 to-secondary/40 bg-linear-to-t absolute inset-0" />

                {/* Gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>

              <div className="absolute bottom-0 end-0 start-0 p-6 text-white">
                <div className="bg-primary mb-2 inline-block rounded-full px-3 py-1 text-xs font-semibold">
                  {caseItem.category}
                </div>
                <h3 className="text-xl font-bold drop-shadow-lg lg:text-2xl">
                  {caseItem.title}
                </h3>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
