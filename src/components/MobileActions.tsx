import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function MobileActions() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-2 md:hidden z-40">
      <div className="flex flex-col gap-2">
        <a
          href="https://wa.me/27832323215"
          className="flex items-center justify-center gap-2 bg-[#1F732C] text-white px-4 py-3 rounded-md font-medium hover:bg-[#1F732C]/90 transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
        <div className="grid grid-cols-2 gap-2">
          <a
            href="tel:0832323215"
            className="flex items-center justify-center gap-2 bg-[#1F732C] text-white px-4 py-3 rounded-md font-medium hover:bg-[#1F732C]/90 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>08 32 32 32 15</span>
          </a>
          <a
            href="tel:0649014512"
            className="flex items-center justify-center gap-2 bg-[#1F732C] text-white px-4 py-3 rounded-md font-medium hover:bg-[#1F732C]/90 transition-colors"
          >
            <Phone className="h-5 w-5" />
            <span>064 901 4512</span>
          </a>
        </div>
      </div>
    </div>
  );
}