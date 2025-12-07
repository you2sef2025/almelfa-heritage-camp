import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Calendar, Users, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    guests: "",
    message: ""
  });

  // REPLACE_WHATSAPP_NUMBER: رقم الواتساب
  const whatsappNumber = "971501234567";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.date) {
      toast({
        title: "يرجى ملء الحقول المطلوبة",
        description: "الاسم ورقم الهاتف والتاريخ مطلوبة",
        variant: "destructive"
      });
      return;
    }

    const message = `🏕️ *طلب حجز جديد - مخيم الملفى*

👤 الاسم: ${formData.name}
📱 رقم الهاتف: ${formData.phone}
📅 التاريخ المطلوب: ${formData.date}
👥 عدد الأشخاص: ${formData.guests || "غير محدد"}
💬 ملاحظات: ${formData.message || "لا يوجد"}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    
    toast({
      title: "تم إرسال الطلب",
      description: "سيتم التواصل معك قريباً عبر الواتساب"
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>حجز المخيم | الملفى - ALMELFA</title>
        <meta name="description" content="احجز الآن في مخيم الملفى واستمتع بتجربة تخييم إماراتية أصيلة في رأس الخيمة" />
      </Helmet>

      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Heritage Pattern */}
        <div className="fixed inset-0 heritage-pattern opacity-20 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-12">
          {/* Back Button */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowRight className="w-5 h-5" />
            <span>العودة للرئيسية</span>
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-accent font-semibold text-sm">احجز تجربتك الآن</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 font-cairo">
                حجز المخيم
              </h1>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                املأ النموذج أدناه وسنتواصل معك عبر الواتساب لتأكيد الحجز
              </p>
            </div>

            {/* Booking Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-elevated border border-border/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="block text-foreground font-semibold font-cairo">
                      الاسم الكامل <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخل اسمك"
                        className="pr-12 h-14 text-lg bg-background/50 border-border/50 focus:border-accent"
                        required
                      />
                      <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="block text-foreground font-semibold font-cairo">
                      رقم الهاتف <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="05xxxxxxxx"
                        className="pr-12 h-14 text-lg bg-background/50 border-border/50 focus:border-accent"
                        required
                      />
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <label className="block text-foreground font-semibold font-cairo">
                      تاريخ الحجز <span className="text-destructive">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="pr-12 h-14 text-lg bg-background/50 border-border/50 focus:border-accent"
                        required
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <label className="block text-foreground font-semibold font-cairo">
                      عدد الأشخاص
                    </label>
                    <div className="relative">
                      <Input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        placeholder="عدد الضيوف"
                        min="1"
                        className="pr-12 h-14 text-lg bg-background/50 border-border/50 focus:border-accent"
                      />
                      <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="block text-foreground font-semibold font-cairo">
                    ملاحظات إضافية
                  </label>
                  <div className="relative">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="أخبرنا عن أي طلبات خاصة..."
                      rows={4}
                      className="pr-12 text-lg bg-background/50 border-border/50 focus:border-accent resize-none"
                    />
                    <MessageCircle className="absolute right-4 top-4 w-5 h-5 text-muted-foreground" />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="whatsapp"
                  size="xl"
                  className="w-full gap-3 text-lg"
                >
                  <Phone className="w-5 h-5" />
                  إرسال طلب الحجز عبر واتساب
                </Button>

                <p className="text-center text-muted-foreground text-sm">
                  سيتم إرسال بيانات الحجز عبر الواتساب للتأكيد
                </p>
              </form>
            </div>

            {/* Quick Contact */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">أو تواصل معنا مباشرة</p>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="gap-2">
                  <Phone className="w-4 h-4" />
                  {whatsappNumber.replace("971", "+971 ")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
