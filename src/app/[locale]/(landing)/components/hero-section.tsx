"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function HeroSection() {
  const t = useTranslations("IndexPage.hero");

  return (
    <section className="bg-secondary relative flex min-h-[700px] items-center overflow-hidden sm:min-h-[600px] lg:min-h-screen">
      {/* Full Background Image */}
      <div className="absolute inset-0">
        <ExportedImage
          src="/images/hero.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="from-secondary/20 via-secondary/30 to-secondary/80 absolute inset-0 bg-gradient-to-r" />
        {/* Professional overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* PDF Shape Overlay */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
      >
        <ExportedImage
          src="/images/patterns/6.png"
          alt="pattern"
          fill
          className="object-cover mix-blend-overlay"
        />
      </m.div>

      {/* Animated Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="bg-primary absolute -end-40 -top-40 h-96 w-96 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            x: [0, -100, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="bg-accent absolute -bottom-40 -start-40 h-96 w-96 rounded-full blur-3xl"
        />
      </div>

      {/* Content Container */}
      <div className="container relative mx-auto px-4 pt-20 lg:pt-24">
        <m.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[600px] space-y-8"
        >
          {/* Badge */}
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-primary/20 text-primary border-primary/30 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur-sm"
          >
            <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            {t("subtitle")}
          </m.div>

          {/* Title */}
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl"
          >
            {t("title")}
          </m.h1>

          {/* Description */}
          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg leading-relaxed text-gray-300 lg:text-xl"
          >
            {t("description")}
          </m.p>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
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
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-auto gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20 hover:text-white"
              asChild
            >
              <a href="#about">
                {t("ctaSecondary")}
                <ArrowRight className="size-5 rtl:rotate-180" />
              </a>
            </Button>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}
