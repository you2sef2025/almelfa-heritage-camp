import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // REPLACE_WHATSAPP_NUMBER: أدخل رقم الواتساب مع رمز البلد (مثال: 971501234567)
  const whatsappNumber = "971501234567";
  // REPLACE_GOOGLE_MAPS_URL: أدخل رابط موقع المخيم من Google Maps
  const googleMapsUrl = "https://maps.google.com/?q=25.0657,55.1713";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            {/* REPLACE_LOGO: يمكن استبدال النص بصورة شعار */}
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-primary font-cairo">الملفى</span>
              <span className="text-xs md:text-sm font-poppins text-muted-foreground tracking-widest">ALMELFA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="default" className="gap-2">
                <MapPin className="w-4 h-4" />
                الموقع
              </Button>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أريد الحجز في مخيم الملفى")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="whatsapp" size="default" className="gap-2">
                <Phone className="w-4 h-4" />
                احجز الآن
              </Button>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="القائمة"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="w-full gap-2">
                  <MapPin className="w-4 h-4" />
                  الموقع على الخريطة
                </Button>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أريد الحجز في مخيم الملفى")}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  احجز الآن عبر واتساب
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
