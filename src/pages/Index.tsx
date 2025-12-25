import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, 
  CalendarCheck, 
  CheckCircle2, 
  Star, 
  Shield, 
  Clock, 
  BadgeCheck,
  ArrowRight,
  Users,
  Banknote
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 py-24 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              Nền tảng dọn dẹp #1 Việt Nam
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Dịch vụ dọn dẹp nhà cửa{" "}
              <span className="text-gradient">nhanh chóng – uy tín – tiện lợi</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Kết nối bạn với đội ngũ thợ dọn dẹp chuyên nghiệp, được kiểm định kỹ càng. 
              Đặt lịch chỉ trong 30 giây!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/dat-dich-vu">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Đặt dịch vụ ngay
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/vip">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  Tìm hiểu VIP
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span><strong className="text-foreground">7,000+</strong> khách hàng</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                <span><strong className="text-foreground">4.9/5</strong> đánh giá</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quy trình đơn giản</h2>
            <p className="text-muted-foreground text-lg">Chỉ 3 bước để có một ngôi nhà sạch sẽ</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                icon: CalendarCheck,
                title: "Đặt lịch",
                description: "Chọn loại dịch vụ, thời gian và địa điểm phù hợp với bạn"
              },
              {
                step: "02",
                icon: CheckCircle2,
                title: "Xác nhận dịch vụ",
                description: "Đội ngũ chuyên nghiệp xác nhận và đến đúng giờ"
              },
              {
                step: "03",
                icon: Star,
                title: "Hoàn thành & đánh giá",
                description: "Kiểm tra kết quả và đánh giá chất lượng dịch vụ"
              }
            ].map((item, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/5">
                    {item.step}
                  </div>
                  <div className="w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tại sao chọn CleanHome?</h2>
            <p className="text-muted-foreground text-lg">Chúng tôi cam kết mang đến trải nghiệm tốt nhất</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: BadgeCheck,
                title: "Thợ được kiểm định",
                description: "100% đội ngũ thợ được xác minh danh tính, đào tạo chuyên nghiệp và có kinh nghiệm",
                color: "bg-primary/10 text-primary"
              },
              {
                icon: Banknote,
                title: "Giá minh bạch",
                description: "Báo giá rõ ràng trước khi đặt, không phát sinh chi phí ẩn. Nền tảng thu 20% hoa hồng",
                color: "bg-accent/10 text-accent"
              },
              {
                icon: Clock,
                title: "Hỗ trợ nhanh chóng",
                description: "Đội ngũ chăm sóc khách hàng 24/7, sẵn sàng hỗ trợ mọi thắc mắc của bạn",
                color: "bg-green-500/10 text-green-600"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className="border-0 shadow-soft hover:shadow-card transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="border-0 gradient-hero overflow-hidden">
            <CardContent className="p-12 md:p-16 text-center relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
              
              <div className="relative">
                <Shield className="w-16 h-16 text-primary-foreground/80 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                  Sẵn sàng trải nghiệm?
                </h2>
                <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
                  Đặt lịch ngay hôm nay để tận hưởng không gian sống sạch sẽ, thoải mái
                </p>
                <Link to="/dat-dich-vu">
                  <Button variant="hero" size="xl" className="bg-white text-primary hover:bg-white/90">
                    Đặt dịch vụ ngay
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
