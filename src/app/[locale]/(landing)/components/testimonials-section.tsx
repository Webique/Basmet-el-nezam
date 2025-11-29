"use client";

import { Quote } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.testimonials");

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
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
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
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="hover:border-primary/30 group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              {/* Quote Icon */}
              <div className="bg-primary/10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full">
                <Quote className="text-primary h-5 w-5" />
              </div>

              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="text-primary h-4 w-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="mb-6 italic leading-relaxed text-gray-600">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <div className="group-hover:text-primary font-bold text-gray-900 transition-colors">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
