export const SITE = {
  name: "Vaani AI Billing",
  url: "https://vaani-1.vercel.app",
  founderName: "Ayush Gupta",
  email: "ayush385361@gmail.com",
  phoneDisplay: "+91 82712 74460",
  phoneHref: "tel:+918271274460",
  whatsappNumber: "918271274460",
  address: "Gaya, Bihar 823001",
  addressShort: "Gaya, Bihar",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.vaaniAi.vaani&hl=en_IN",
} as const;

/**
 * Real app screenshots. Add files under public/screenshots/ and list them here;
 * the homepage "See the app" section renders only when this is non-empty.
 * Do not add mock-ups or generated UI images.
 */
export const SCREENSHOTS: { src: string; alt: string; width: number; height: number }[] = [];

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
