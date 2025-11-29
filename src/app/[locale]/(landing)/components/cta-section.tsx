"use client";

import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function CTASection() {
  const t = useTranslations("LandingPage.cta");

  return (
    <section
      id="contact"
      className="from-primary to-primary/80 bg-linear-to-br relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <ExportedImage
          src="/images/patterns/6.png"
          alt="pattern"
          fill
          className="object-cover"
        />
      </div>

      <m.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute left-0 top-1/2 h-1/2 w-1/3 -translate-y-1/2"
      >
        <ExportedImage
          src="/images/patterns/6.png"
          alt="pattern"
          fill
          className="object-contain mix-blend-overlay"
        />
      </m.div>

      {/* Decorative Elements */}
      <m.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute -end-40 -top-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      <m.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 4, delay: 1, repeat: Infinity }}
        className="absolute -bottom-40 -start-40 h-96 w-96 rounded-full bg-white/10 blur-3xl"
      />
      <m.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.15, 0.05] }}
        transition={{ duration: 3, delay: 0.5, repeat: Infinity }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
      />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Content */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Icon */}
            <m.div
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <m.div
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 shadow-2xl backdrop-blur-sm ring-4 ring-white/20"
              >
                <MessageCircle className="text-primary-foreground h-12 w-12" />
              </m.div>
            </m.div>

            {/* Text */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <m.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-primary-foreground text-4xl font-bold drop-shadow-lg lg:text-6xl"
              >
                {t("title")}
              </m.h2>
              <m.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="mx-auto max-w-2xl text-lg text-white/90 lg:text-xl"
              >
                {t("description")}
              </m.p>
            </m.div>

            {/* Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="hover:shadow-3xl group h-auto gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-gray-900 shadow-2xl transition-all duration-300 hover:bg-gray-100 ring-4 ring-white/20"
                  asChild
                >
                  <Link
                    href={siteConfig.links.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <m.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <MessageCircle className="size-5" />
                    </m.div>
                    {t("button")}
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
                  </Link>
                </Button>
              </m.div>

              <m.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-auto gap-2 rounded-full border-2 border-white bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20 ring-2 ring-white/20"
                  asChild
                >
                  <a href={`tel:${siteConfig.support.phone}`}>
                    <m.div
                      animate={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                    >
                      <Phone className="size-5" />
                    </m.div>
                    Call Now
                  </a>
                </Button>
              </m.div>
            </m.div>

            {/* Contact Info */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center gap-6 pt-8 sm:flex-row sm:gap-12"
            >
              <m.a
                href={`tel:${siteConfig.support.phone}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
              >
                <m.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-white/30"
                >
                  <Phone className="h-5 w-5 text-white" />
                </m.div>
                <div className="text-left">
                  <div className="text-sm text-white/80">Phone</div>
                  <div className="font-semibold text-white transition-colors group-hover:text-primary" dir="ltr">
                    {siteConfig.support.phone}
                  </div>
                </div>
              </m.a>

              <m.a
                href={`mailto:${siteConfig.support.email}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                <m.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-white/30"
                >
                  <svg
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </m.div>
                <div className="text-left">
                  <div className="text-sm text-white/80">Email</div>
                  <div className="font-semibold text-white transition-colors group-hover:text-primary">
                    {siteConfig.support.email}
                  </div>
                </div>
              </m.a>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
