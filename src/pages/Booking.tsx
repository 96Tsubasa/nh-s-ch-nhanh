import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  CalendarCheck, 
  User, 
  Phone, 
  MapPin, 
  Clock,
  Sparkles,
  CheckCircle2,
  Info
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    serviceType: "",
    date: "",
    time: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Đặt lịch thành công!",
      description: "Chúng tôi sẽ liên hệ xác nhận trong vòng 15 phút.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20">
          <Card className="max-w-lg mx-auto border-0 shadow-card">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Đặt lịch thành công!</h2>
              <p className="text-muted-foreground mb-6">
                Cảm ơn bạn đã sử dụng dịch vụ CleanHome. Chúng tôi sẽ liên hệ xác nhận trong vòng 15 phút.
              </p>
              <div className="bg-secondary rounded-xl p-4 mb-6 text-left">
                <h4 className="font-semibold mb-2">Thông tin đặt lịch:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Họ tên: {formData.name}</li>
                  <li>• Điện thoại: {formData.phone}</li>
                  <li>• Địa chỉ: {formData.address}</li>
                  <li>• Dịch vụ: {formData.serviceType === "basic" ? "Dọn dẹp cơ bản" : "Dọn dẹp chuyên sâu"}</li>
                  <li>• Ngày: {formData.date}</li>
                  <li>• Giờ: {formData.time}</li>
                </ul>
              </div>
              <Button onClick={() => setIsSubmitted(false)} variant="outline">
                Đặt lịch mới
              </Button>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <CalendarCheck className="w-4 h-4" />
              Đặt lịch dịch vụ
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Đặt dịch vụ dọn dẹp</h1>
            <p className="text-muted-foreground">Điền thông tin để đặt lịch, chúng tôi sẽ xác nhận ngay!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    Thông tin đặt lịch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="flex items-center gap-2">
                          <User className="w-4 h-4 text-primary" />
                          Họ và tên
                        </Label>
                        <Input
                          id="name"
                          placeholder="Nguyễn Văn A"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary" />
                          Số điện thoại
                        </Label>
                        <Input
                          id="phone"
                          placeholder="0912 345 678"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        Địa chỉ
                      </Label>
                      <Input
                        id="address"
                        placeholder="Số nhà, đường, phường/xã, quận/huyện"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-primary" />
                        Loại dịch vụ
                      </Label>
                      <Select 
                        required
                        value={formData.serviceType}
                        onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn loại dịch vụ" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Dọn dẹp cơ bản (300.000 VND)</SelectItem>
                          <SelectItem value="deep">Dọn dẹp chuyên sâu (500.000 VND)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center gap-2">
                          <CalendarCheck className="w-4 h-4 text-primary" />
                          Ngày thực hiện
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="time" className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Giờ thực hiện
                        </Label>
                        <Select
                          required
                          value={formData.time}
                          onValueChange={(value) => setFormData({ ...formData, time: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Chọn giờ" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="08:00">08:00</SelectItem>
                            <SelectItem value="09:00">09:00</SelectItem>
                            <SelectItem value="10:00">10:00</SelectItem>
                            <SelectItem value="13:00">13:00</SelectItem>
                            <SelectItem value="14:00">14:00</SelectItem>
                            <SelectItem value="15:00">15:00</SelectItem>
                            <SelectItem value="16:00">16:00</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Đặt lịch ngay
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Price Summary */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-card sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Tóm tắt giá</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Dịch vụ</span>
                    <span className="font-semibold">
                      {formData.serviceType === "deep" ? "500.000" : "300.000"} VND
                    </span>
                  </div>

                  <div className="bg-secondary/50 rounded-xl p-4">
                    <div className="flex items-start gap-2 text-sm">
                      <Info className="w-4 h-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground">Phí hoa hồng nền tảng</p>
                        <p className="text-muted-foreground">
                          Nền tảng thu 20% hoa hồng trên mỗi đơn hàng để duy trì chất lượng dịch vụ.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Tổng thanh toán</span>
                      <span className="text-2xl font-bold text-primary">
                        {formData.serviceType === "deep" ? "500.000" : "300.000"} VND
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Thanh toán khi hoàn thành dịch vụ
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Booking;
