import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Users, 
  ShoppingCart, 
  Banknote, 
  Crown,
  TrendingUp,
  BarChart3,
  PieChart,
  Calendar
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPie,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from "recharts";

const Dashboard = () => {
  // Mock data
  const stats = [
    {
      title: "Tổng số khách hàng",
      value: "7,000",
      icon: Users,
      change: "+12%",
      color: "text-primary"
    },
    {
      title: "Tổng số đơn hàng / năm",
      value: "70,000",
      icon: ShoppingCart,
      change: "+8%",
      color: "text-blue-500"
    },
    {
      title: "Giá trị trung bình / đơn",
      value: "300,000 VND",
      icon: Banknote,
      change: "+5%",
      color: "text-green-500"
    },
    {
      title: "Thành viên VIP",
      value: "840",
      icon: Crown,
      change: "+15%",
      color: "text-accent"
    }
  ];

  const monthlyData = [
    { month: "T1", orders: 5200, revenue: 312 },
    { month: "T2", orders: 4800, revenue: 288 },
    { month: "T3", orders: 5600, revenue: 336 },
    { month: "T4", orders: 6100, revenue: 366 },
    { month: "T5", orders: 5900, revenue: 354 },
    { month: "T6", orders: 6400, revenue: 384 },
    { month: "T7", orders: 6800, revenue: 408 },
    { month: "T8", orders: 7200, revenue: 432 },
    { month: "T9", orders: 6600, revenue: 396 },
    { month: "T10", orders: 5800, revenue: 348 },
    { month: "T11", orders: 5400, revenue: 324 },
    { month: "T12", orders: 6200, revenue: 372 },
  ];

  const revenueBreakdown = [
    { name: "Hoa hồng dịch vụ (20%)", value: 4200, color: "#0D9488" },
    { name: "Gói VIP", value: 672, color: "#EA6742" }
  ];

  const serviceData = [
    { name: "Dọn dẹp cơ bản", value: 65 },
    { name: "Dọn dẹp chuyên sâu", value: 35 }
  ];

  const COLORS = ["#0D9488", "#EA6742"];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            Tổng quan nền tảng
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard quản trị</h1>
          <p className="text-muted-foreground">
            Dữ liệu demo cho mục đích trình bày dự án
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-soft hover:shadow-card transition-all">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-3 text-sm">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className="text-green-500 font-medium">{stat.change}</span>
                  <span className="text-muted-foreground">so với năm trước</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 gradient-hero">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Banknote className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-primary-foreground/80 text-sm">Doanh thu hoa hồng (20%)</p>
                  <p className="text-3xl font-bold text-primary-foreground">~4,200,000,000 VND</p>
                </div>
              </div>
              <p className="text-primary-foreground/70 text-sm">
                Tính trên 70,000 đơn x 300,000 VND x 20%
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 gradient-accent">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-accent-foreground/80 text-sm">Doanh thu gói VIP</p>
                  <p className="text-3xl font-bold text-accent-foreground">~672,000,000 VND</p>
                </div>
              </div>
              <p className="text-accent-foreground/70 text-sm">
                Tính trên 840 thành viên x 80,000 VND x 12 tháng
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Orders Chart */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Số đơn hàng theo tháng
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                    <YAxis stroke="#9ca3af" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="orders" 
                      stroke="#0D9488" 
                      fill="#0D9488" 
                      fillOpacity={0.2}
                      name="Đơn hàng"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Breakdown */}
          <Card className="border-0 shadow-soft">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Cơ cấu doanh thu (triệu VND)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPie>
                    <Pie
                      data={revenueBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}M`}
                      labelLine={false}
                    >
                      {revenueBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value} triệu VND`, 'Doanh thu']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }}
                    />
                  </RechartsPie>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                {revenueBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Distribution */}
        <Card className="border-0 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Phân bổ loại dịch vụ (%)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={serviceData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#9ca3af" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={150} />
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Tỷ lệ']}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                    {serviceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card className="border-0 bg-secondary/30 mt-8">
          <CardContent className="p-8">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Tổng kết doanh thu dự kiến
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Doanh thu hoa hồng</p>
                <p className="text-2xl font-bold text-primary">4,200,000,000 VND</p>
              </div>
              <div className="text-center p-4 bg-card rounded-xl">
                <p className="text-sm text-muted-foreground mb-1">Doanh thu VIP</p>
                <p className="text-2xl font-bold text-accent">672,000,000 VND</p>
              </div>
              <div className="text-center p-4 gradient-hero rounded-xl">
                <p className="text-sm text-primary-foreground/80 mb-1">Tổng doanh thu / năm</p>
                <p className="text-2xl font-bold text-primary-foreground">~4,872,000,000 VND</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;
