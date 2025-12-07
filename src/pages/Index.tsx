import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import MediaSection from "@/components/MediaSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // REPLACE_SITE_URL: استبدل بالرابط الفعلي للموقع
  const siteUrl = "https://REPLACE_USERNAME.github.io/almelfa";

  return (
    <>
      <Helmet>
        <title>الملفى - مخيم إماراتي أصيل | ALMELFA Camp</title>
        <meta 
          name="description" 
          content="مخيم الملفى - تجربة تخييم إماراتية أصيلة تجمع بين عراقة الماضي وراحة الحاضر. جلسات عربية، شواء، مدفئة، ومرافق متكاملة في قلب الطبيعة الصحراوية."
        />
        <meta name="keywords" content="مخيم, الملفى, تخييم, إماراتي, صحراء, جلسات عربية, شواء, ALMELFA, camp, UAE, desert" />
        <meta name="author" content="مخيم الملفى" />
        
        {/* Open Graph */}
        <meta property="og:title" content="الملفى - مخيم إماراتي أصيل | ALMELFA Camp" />
        <meta property="og:description" content="مخيم الملفى - تجربة تخييم إماراتية أصيلة تجمع بين عراقة الماضي وراحة الحاضر." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:locale" content="ar_AE" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="الملفى - مخيم إماراتي أصيل" />
        <meta name="twitter:description" content="تجربة تخييم إماراتية أصيلة تجمع بين عراقة الماضي وراحة الحاضر." />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "مخيم الملفى - ALMELFA Camp",
            "description": "مخيم إماراتي أصيل يقدم تجربة تخييم فريدة تجمع بين الأصالة والراحة",
            "url": siteUrl,
            "telephone": "+971501234567", // REPLACE_PHONE
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE",
              "addressRegion": "Dubai" // REPLACE_REGION
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.0657", // REPLACE_LAT
              "longitude": "55.1713" // REPLACE_LNG
            },
            "priceRange": "$$",
            "openingHours": "Mo-Su 00:00-24:00",
            "sameAs": [
              "https://instagram.com/REPLACE_INSTAGRAM",
              "https://tiktok.com/@REPLACE_TIKTOK"
            ]
          })}
        </script>

        <html lang="ar" dir="rtl" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <MediaSection />
          <MapSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
