import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Crown, 
  CheckCircle2, 
  Zap, 
  Ban, 
  Percent,
  Star,
  Gift,
  ArrowRight
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const VIP = () => {
  const { toast } = useToast();
  const [isUpgraded, setIsUpgraded] = useState(false);

  const handleUpgrade = () => {
    setIsUpgraded(true);
    toast({
      title: "Nâng cấp VIP thành công!",
      description: "Chào mừng bạn đến với gói thành viên VIP của CleanHome.",
    });
  };

  const benefits = [
    {
      icon: Zap,
      title: "Ưu tiên đặt lịch",
      description: "Đơn hàng của bạn được xử lý và xác nhận trước các khách hàng thông thường"
    },
    {
      icon: Ban,
      title: "Không hiển thị quảng cáo",
      description: "Trải nghiệm ứng dụng mượt mà, không bị gián đoạn bởi quảng cáo"
    },
    {
      icon: Percent,
      title: "Giảm giá mỗi đơn",
      description: "Được giảm 10% trên tất cả các đơn hàng dịch vụ dọn dẹp"
    },
    {
      icon: Gift,
      title: "Ưu đãi độc quyền",
      description: "Nhận các khuyến mãi và ưu đãi đặc biệt dành riêng cho thành viên VIP"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Crown className="w-4 h-4" />
              Gói thành viên VIP
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Nâng cấp trải nghiệm của bạn
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Trở thành thành viên VIP để nhận những đặc quyền và ưu đãi tốt nhất từ CleanHome
            </p>
          </div>

          {/* Pricing Card */}
          <Card className="border-0 shadow-card overflow-hidden mb-12 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            
            <CardContent className="p-8 md:p-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl gradient-accent flex items-center justify-center">
                      <Crown className="w-7 h-7 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Gói VIP</h3>
                      <p className="text-muted-foreground">Thành viên cao cấp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl md:text-5xl font-bold text-primary">80.000</span>
                    <span className="text-xl text-muted-foreground">VND / tháng</span>
                  </div>

                  {isUpgraded ? (
                    <div className="bg-green-100 text-green-700 rounded-xl p-4 flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6" />
                      <div>
                        <p className="font-semibold">Bạn đã là thành viên VIP!</p>
                        <p className="text-sm">Tận hưởng tất cả đặc quyền VIP ngay bây giờ.</p>
                      </div>
                    </div>
                  ) : (
                    <Button 
                      variant="hero" 
                      size="xl" 
                      className="w-full md:w-auto"
                      onClick={handleUpgrade}
                    >
                      Nâng cấp VIP ngay
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  )}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-lg mb-4">Quyền lợi bao gồm:</h4>
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{benefit.title}</p>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Benefits Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Đặc quyền VIP chi tiết</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card 
                  key={index}
                  className="border-0 shadow-soft hover:shadow-card transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{benefit.title}</h3>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <Card className="border-0 bg-secondary/30">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg italic text-foreground mb-4">
                "Từ khi nâng cấp VIP, tôi luôn được ưu tiên đặt lịch và giảm giá 10% mỗi đơn. 
                Rất đáng với 80.000đ mỗi tháng!"
              </p>
              <p className="text-sm text-muted-foreground">
                — Chị Nguyễn Thị Mai, Quận 7, TP.HCM
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default VIP;
