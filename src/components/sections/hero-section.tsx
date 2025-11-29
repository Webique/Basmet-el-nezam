"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function HeroSection() {
  const t = useTranslations("LandingPage.hero");
  const tAbout = useTranslations("LandingPage.about");

  return (
    <section className="bg-linear-to-br from-secondary via-secondary/90 to-secondary relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <ExportedImage
          src="/images/shapes-from-the-pdf/03fcab85-0d54-4bff-a3d1-2c44de322d19-0002.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Additional PDF Shape Overlay */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <ExportedImage
          src="/images/shapes-from-the-pdf/برزنتيشن بصمة النظام (1).pdf-image-043.png"
          alt=""
          fill
          className="object-cover mix-blend-overlay"
        />
      </m.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1.2 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="bg-primary absolute -right-40 -top-40 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1.1 }}
          transition={{ duration: 2, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="bg-primary/50 absolute -bottom-40 -left-40 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08, scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="bg-accent absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 pt-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div className="space-y-8">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-4"
            >
              <m.div
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-primary/20 text-primary inline-block rounded-full border border-primary/30 px-4 py-2 text-sm font-semibold backdrop-blur-sm"
              >
                {t("subtitle")}
              </m.div>

              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl font-bold leading-tight text-white lg:text-7xl"
              >
                <m.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="block"
                >
                  {t("title")}
                </m.span>
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg leading-relaxed text-gray-300 lg:text-xl"
              >
                {t("description")}
              </m.p>
            </m.div>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground group h-auto gap-2 rounded-full px-8 py-4 text-base font-bold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                asChild
              >
                <Link
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5" />
                  {t("cta")}
                  <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-auto gap-2 rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/10"
                asChild
              >
                <a href="#about">
                  {t("ctaSecondary")}
                  <ArrowRight className="size-5" />
                </a>
              </Button>
            </m.div>

            {/* Stats */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "15+", label: tAbout("experience") },
                { value: "500+", label: tAbout("cases") },
                { value: "98%", label: tAbout("clients") }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-primary text-3xl font-bold lg:text-4xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </m.div>
          </div>

          {/* Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            className="relative perspective-1000"
          >
            <m.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl ring-4 ring-primary/20"
            >
              <ExportedImage
                src="/images/logos/1.png"
                alt="Basmet Al-Nezam"
                fill
                className="object-contain p-8"
                priority
              />
              <div className="bg-linear-to-t from-secondary/50 absolute inset-0 to-transparent" />
              {/* Glow effect */}
              <m.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="from-primary/20 to-transparent absolute inset-0 bg-linear-to-br"
              />
            </m.div>

            {/* Floating Card */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-full">
                  <svg
                    className="text-primary-foreground h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">
                    Licensed
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    Law Firm
                  </div>
                </div>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-400">Scroll</span>
          <svg
            className="h-6 w-6 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </m.div>
      </m.div>
    </section>
  );
}
