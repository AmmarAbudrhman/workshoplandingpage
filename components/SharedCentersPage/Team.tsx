import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const team = [
    {
      name: "عمار باوزير",
      role: "مدير المشروع و مطور باك اند",
      description: "إدارة المشروع وتطوير الأنظمة الخلفية",
    },
    {
      name: "علي بن سميدع",
      role: "مطور فلتر",
      description: "تطوير تطبيقات الموبايل باستخدام تقنية فلتر",
    },
    {
      name: "سالم بكير",
      role: "مطور فلتر",
      description: "تطوير تطبيقات الموبايل وتجربة المستخدم",
    },
    {
      name: "محمد بن عزون",
      role: "مطور باك اند",
      description: "تطوير قواعد البيانات والأنظمة الخلفية",
    },
    {
      name: "اسامه باجاه",
      role: "مطور باك اند",
      description: "تطوير الأنظمة الخلفية وخدمات API",
    },
    {
      name: "محمد باهادي",
      role: "مطور باك اند",
      description: "تطوير وصيانة الأنظمة الخلفية",
    },
    {
      name: "احمد محمد سالم",
      role: "مطور باك اند",
      description: "تطوير وتحسين كفاءة النظام الخلفي",
    },
  ];

  return (
    <section id="team" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
          فريق العمل
        </h2>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card
              key={index}
              className="group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  {member.name}
                </CardTitle>
                <div>
                  <Badge variant="secondary" className="font-medium">
                    {member.role}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
