import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      title: "الباقة المجانية",
      duration: "3 أشهر",
      price: "مجاني",
      description: "تجربة كاملة لجميع ميزات المنصة لمدة محدودة.",
      features: [
        "إدارة الطلبات",
        "تتبع الصيانة",
        "إدارة العملاء",
        "تقارير أساسية",
      ],
      cta: "ابدأ الآن مجاناً",
      highlighted: false,
    },
    {
      title: "الباقة السنوية",
      duration: "سنة كاملة",
      price: "اتصل بنا للسعر",
      description: "الحل الأمثل لإدارة ورشتك بشكل احترافي ومستمر.",
      features: [
        "جميع ميزات الباقة المجانية",
        "دعم فني متواصل",
        "تخزين سحابي غير محدود",
        "تقارير مالية وهندسية متقدمة",
        "إدارة فرق العمل",
      ],
      cta: "اشترك الآن",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
          خطط الأسعار
        </h2>
        <div className="w-28 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4 mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col transition-all duration-300 hover:shadow-2xl ${
                plan.highlighted ? "border-primary ring-2 ring-primary/20 scale-105" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  {plan.title}
                </CardTitle>
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/ {plan.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-4 italic">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full text-lg font-bold" variant={plan.highlighted ? "default" : "outline"}>
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
