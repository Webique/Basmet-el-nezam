"use client";

import { Quote } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("LandingPage.testimonials");

  const testimonials = [
    {
      name: t("testimonial1.name"),
      role: t("testimonial1.role"),
      content: t("testimonial1.content"),
      rating: 5
    },
    {
      name: t("testimonial2.name"),
      role: t("testimonial2.role"),
      content: t("testimonial2.content"),
      rating: 5
    },
    {
      name: t("testimonial3.name"),
      role: t("testimonial3.role"),
      content: t("testimonial3.content"),
      rating: 5
    }
  ];

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white to-gray-50 py-20 lg:py-32">
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
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
            >
              {/* Background gradient on hover */}
              <m.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="from-primary/5 to-transparent absolute inset-0 bg-linear-to-br"
              />

              {/* Quote Icon */}
              <m.div
                whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
                className="bg-primary/10 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full ring-2 ring-primary/20"
              >
                <Quote className="text-primary h-6 w-6" />
              </m.div>

              {/* Rating */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4 flex gap-1"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <m.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-primary h-5 w-5 fill-current drop-shadow-sm"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </m.svg>
                ))}
              </m.div>

              {/* Content */}
              <p className="mb-6 leading-relaxed text-gray-600">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <m.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="border-t border-gray-200 pt-6"
              >
                <div className="font-bold text-gray-900 transition-colors group-hover:text-primary">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </m.div>

              {/* Decorative corner */}
              <m.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="from-primary/20 to-transparent absolute -end-4 -top-4 h-24 w-24 rounded-full bg-linear-to-br blur-2xl"
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
