export const siteConfig = {
  links: {
    instagram: "https://www.instagram.com/basmet_alnezam",
    linkedin: "https://www.linkedin.com/company/basmet-alnezam",
    whatsapp: "https://wa.me/966920000861"
  },

  support: {
    phone: "+966-92 000 0861",
    email: "info@basmet-alnezam.sa",
    whatsapp: "+966920000861"
  },

  certificate: "License-12345",

  url: process.env.NEXT_PUBLIC_SITE_URL!,
  ogImage: `${process.env.NEXT_PUBLIC_SITE_URL!}/og.png`
};

export type SiteConfig = typeof siteConfig;
