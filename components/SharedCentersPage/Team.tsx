import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team = () => {
  const team = [
    {
      name: "عمار باوزير",
      role: "باك اند , مدير المشروع",
      description: "تطوير الأنظمة الخلفية وإدارة الفريق",
    },
    {
      name: "ريم الذيباني",
      role: "فلتر",
      description: "تطوير تطبيقات الموبايل",
    },
    {
      name: "صفاء باعمور",
      role: "رياكت",
      description: "تطوير واجهات المستخدم",
    },
    {
      name: "حبيبة بلعلا",
      role: "رياكت",
      description: "تطوير واجهات المستخدم",
    },
    {
      name: "منى مجدي مرعي",
      role: "UI/UX",
      description: "تصميم واجهات المستخدم",
    },
    {
      name: "مبارك بامزاحم",
      role: "فلتر",
      description: "تطوير تطبيقات الموبايل",
    },
    {
      name: "اسامه باجاه",
      role: "باك اند",
      description: "تطوير الأنظمة الخلفية",
    },
    {
      name: "صالح بن جحلان",
      role: "باك اند",
      description: "تطوير الأنظمة الخلفية",
    },
    {
      name: "ابراهيم النهدي",
      role: "رياكت",
      description: "تطوير واجهات المستخدم",
    },
    {
      name: "عبد الكريم باوزير",
      role: "UI/UX",
      description: "تصميم واجهات المستخدم",
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
