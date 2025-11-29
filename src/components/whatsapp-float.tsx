"use client";

import { MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { siteConfig } from "@/config/site";

export default function WhatsAppFloat() {
  const t = useTranslations("IndexPage.WhatsAppFloat");

  return (
    <m.a
      href={siteConfig.links.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl lg:h-16 lg:w-16"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={t("tooltip")}
    >
      <MessageCircle className="h-7 w-7 lg:h-8 lg:w-8" />

      {/* Pulse Animation */}
      <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-75" />
    </m.a>
  );
}
