import { LayoutDashboard, CheckCircle2, Trophy, Timer } from "lucide-react";

const Features = () => {
  const innovations = [
    {
      title: "لوحة تحكم ذكية",
      description: "توفر رؤية واضحة للمشرف عن أداء الحلقات والمعلمين.",
      icon: <LayoutDashboard />,
    },
    {
      title: "نظام متابعة الحلقات",
      description: "متابعة دقيقة لكل طالب في كل حلقة بشكل فوري.",
      icon: <CheckCircle2 />,
    },
    {
      title: "تقارير الأداء",
      description: "تقارير تفصيلية أسبوعية وشهرية لتحليل تقدم الطلاب.",
      icon: <Trophy />,
    },
    {
      title: "إدارة الحضور والغياب",
      description: "نظام مؤتمت بالكامل لتسجيل الحضور والغياب.",
      icon: <Timer />,
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
          مميزات النظام
        </h2>

        <div className="w-28 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4 mb-20"></div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {innovations.map((item, index) => (
            <div
              key={index}
              className="group bg-card/80 backdrop-blur p-8 rounded-3xl shadow-lg border border-border hover:-translate-y-3 hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 group-hover:bg-primary/10 group-hover:text-primary rounded-2xl flex items-center justify-center mb-6 bg-primary text-primary-foreground transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold mb-4 text-foreground">
                {item.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
