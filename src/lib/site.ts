export const SITE = {
  founderName: "Ayush Gupta",
  email: "ayush385361@gmail.com",
  phoneDisplay: "+91 82712 74460",
  phoneHref: "tel:+918271274460",
  whatsappNumber: "918271274460",
  address: "Gaya, Bihar 823001",
  addressShort: "Gaya, Bihar",
  apkUrl: "https://drive.google.com/file/d/1sR2GdcE2KZ6ZLAd46T6k9xpxX_4Ci0p9/view?usp=sharing",
} as const;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
