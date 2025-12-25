import { Sparkles, Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-lg">CleanHome</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Nền tảng kết nối dịch vụ dọn dẹp nhà cửa uy tín, nhanh chóng và tiện lợi cho mọi gia đình Việt Nam.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Liên hệ</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                1900 1234 56
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                support@cleanhome.vn
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Hà Nội, Việt Nam
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Thông tin</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Về chúng tôi</li>
              <li>Điều khoản dịch vụ</li>
              <li>Chính sách bảo mật</li>
              <li>Hỗ trợ khách hàng</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2024 CleanHome. Dự án demo cho môn học E-Commerce Systems.</p>
        </div>
      </div>
    </footer>
  );
};
