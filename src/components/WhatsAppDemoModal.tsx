import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/site';

const SUPPORT_MESSAGE = "Hi Vaani team, I have a question about the Vaani billing app.";

export default function WhatsAppDemoModal() {
  return (
    <a
      href={buildWhatsAppUrl(SUPPORT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Vaani on WhatsApp"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-[#128C7E] hover:bg-[#0e6e63] text-white p-3.5 sm:px-5 sm:py-3 rounded-full shadow-xl flex items-center gap-2 font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128C7E]"
    >
      <MessageCircle className="w-6 h-6" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp us</span>
    </a>
  );
}
