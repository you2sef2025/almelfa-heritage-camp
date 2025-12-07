import { Button } from "@/components/ui/button";
import { Phone, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  // REPLACE_WHATSAPP_NUMBER: رقم الواتساب
  const whatsappNumber = "971501234567";
  // REPLACE_VIDEO_URL: رابط فيديو المخيم
  const videoUrl = "https://www.youtube.com/watch?v=REPLACE_VIDEO_ID";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/80" />
      </div>

      {/* Heritage Pattern Overlay */}
      <div className="absolute inset-0 heritage-pattern opacity-30" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Decorative Element */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent rounded-full" />
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-4 text-shadow-hero font-cairo">
            الملفى
          </h1>
          <p className="text-xl md:text-2xl font-poppins text-secondary tracking-[0.3em] mb-8">
            ALMELFA
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto leading-relaxed">
            مخيم إماراتي أصيل يجمع بين عراقة الماضي وراحة الحاضر
          </p>
          <p className="text-base md:text-lg text-primary-foreground/70 mb-10 max-w-xl mx-auto">
            استمتع بأجواء الضيافة الخليجية الأصيلة في قلب الطبيعة الصحراوية
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("مرحباً، أريد الحجز في مخيم الملفى")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero" size="xl" className="gap-3 min-w-[200px]">
                <Phone className="w-5 h-5" />
                احجز الآن
              </Button>
            </a>
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="hero-outline" size="xl" className="gap-3 min-w-[200px]">
                <Play className="w-5 h-5" />
                شاهد الفيديو
              </Button>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
