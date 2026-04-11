"use client";

import {
  Building2,
  Users2,
  GraduationCap,
  BookOpen,
  LayoutDashboard,
  CheckCircle2,
  Timer,
  Trophy,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const SharedCentersPage = () => {
  const stats = [
    {
      label: "مراكز نشطة",
      value: "3",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      label: "طالب وطالبة",
      value: "+200",
      icon: <Users2 className="w-6 h-6" />,
    },
    {
      label: "معلم ومعلمة",
      value: "+20",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      label: "سجل متابعة",
      value: "+1000",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  const centers = [
    {
      name: "مركز النور",
      students: 80,
      classes: 6,
      since: "2023",
      image:
        "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=800&auto=format&fit=crop",
      description: "مركز متخصص في تعليم القرآن الكريم والقراءات.",
    },
    {
      name: "مركز الهداية",
      students: 120,
      classes: 8,
      since: "2024",
      image:
        "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=800&auto=format&fit=crop",
      description: "منارة للعلم والتربية تهدف لبناء جيل قرآني فريد.",
    },
    {
      name: "مركز الفرقان",
      students: 50,
      classes: 4,
      since: "2025",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
      description: "مركز رائد في استخدام التقنيات الحديثة لتعليم القرآن.",
    },
  ];

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
      name: "احمد قرينون",
      role: "فلتر",
      description: "تطوير تطبيقات الموبايل",
    },
    {
      name: "عبدالرحمن الجعيدي",
      role: "رياكت",
      description: "تطوير واجهات المستخدم",
    },
    {
      name: "ابراهيم النهدي",
      role: "رياكت",
      description: "تطوير واجهات المستخدم",
    },
  ];

  const journey = [
    {
      year: "2024",
      title: "بداية فكرة المشروع",
      description: "انطلقت الفكرة لسد الفجوة التقنية في إدارة مراكز التحفيظ.",
    },
    {
      year: "2025",
      title: "تطوير النسخة الأولى",
      description: "إطلاق النسخة التجريبية وبدء العمل مع أول مركز.",
    },
    {
      year: "2026",
      title: "إطلاق المنصة المتكاملة",
      description: "التوسع وبدء العمل مع مجموعة من المراكز الرائدة.",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      <section
        id="hero"
        className="relative py-24 text-center overflow-hidden px-6"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 blur-3xl rounded-full"></div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
          منصة <span className="text-primary"> نور</span> — إدارة ذكية لحلقات
          القرآن
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 delay-200 duration-700">
          منصة رقمية تساعد المراكز التعليمية على إدارة الحلقات والطلاب والمعلمين
          بكفاءة عالية مع تقارير متقدمة.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 delay-300 duration-700">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/20 cursor-pointer"
            onClick={() =>
              toast.info("هذه الميزة غير متوفرة حالياً", {
                description: "ستكون متاحة في النسخة القادمة إن شاء الله",
              })
            }
          >
            عرض المراكز
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            onClick={() =>
              toast.info("هذه الميزة غير متوفرة حالياً", {
                description: "ستكون متاحة في النسخة القادمة إن شاء الله",
              })
            }
          >
            طلب الانضمام
          </Button>
        </div>
      </section>

      <section
        id="about"
        className="py-24 bg-muted/30 px-6 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            عن المشروع
          </h2>

          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-16"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "المشكلة",
                icon: <BookOpen />,
                desc: "تعاني كثير من المراكز التعليمية من صعوبة في متابعة الطلاب وإدارة الحلقات بشكل منظم.",
              },
              {
                title: "الحل",
                icon: <CheckCircle2 />,
                desc: "منصة  نور تقدم نظامًا رقميًا متكاملًا لإدارة الحلقات والطلاب والمعلمين مع تقارير واضحة وسهلة.",
              },
              {
                title: "الرؤية",
                icon: <Trophy />,
                desc: "بناء منظومة رقمية تدعم تعليم القرآن والعلوم الشرعية بطريقة احترافية وتفاعلية.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-card border border-border shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stats" className="py-24 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6 text-center">
          الأحصائيات
        </h2>
        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-16"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-card p-8 rounded-3xl border border-border text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-lg hover:border-primary/20"
            >
              <div className="inline-flex p-3 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-1">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="centers" className="py-24 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              المراكز المشتركة
            </h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-4"></div>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              نفتخر بالعمل مع نخبة من المراكز التعليمية المتميزة
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {centers.map((center, index) => (
              <div key={index}>
                <Card className="group overflow-hidden bg-card rounded-3xl border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={center.image}
                      alt={center.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {center.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {center.description}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          عدد الطلاب
                        </p>
                        <p className="font-bold text-primary">
                          {center.students}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          عدد الحلقات
                        </p>
                        <p className="font-bold text-primary">
                          {center.classes}
                        </p>
                      </div>
                    </div>

                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/10">
                      عرض المركز
                    </Button>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <section id="journey" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
            رحلتنا
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4 mb-20"></div>

          <div className="max-w-3xl mx-auto">
            {journey.map((item, index) => (
              <div key={index} className="flex gap-6 mb-12 last:mb-0 relative">
                {index !== journey.length - 1 && (
                  <div className="absolute top-10 bottom-[-3rem] left-5 w-[2px] bg-gradient-to-b from-primary to-transparent"></div>
                )}

                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-lg z-10">
                  {index + 1}
                </div>

                <div className="bg-card border max-w-xl border-border p-6 rounded-2xl shadow-md hover:shadow-xl transition">
                  <span className="text-primary font-bold text-lg mb-1 block">
                    {item.year}
                  </span>

                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="team" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
            فريق العمل
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-primary-foreground to-secondary mx-auto rounded-full mt-4 mb-20"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group p-8 bg-card border border-border rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <h3 className="text-xl font-bold text-primary mb-1">
                  {member.name}
                </h3>

                <p className="text-primary/70 text-sm font-medium mb-3">
                  {member.role}
                </p>

                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="gallery" className="py-20 bg-primary/5 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary text-center">
            صور من النظام
          </h2>

          <div className="w-28 h-1.5 bg-gradient-to-r from-primary-foreground to-secondary mx-auto rounded-full mt-4 mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary md:mt-12">
              <img
                src="/images/1.png"
                alt="Students Management"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary md:mt-12">
              <img
                src="/images/2.png"
                alt="Students Management"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary md:mt-12">
              <img
                src="/images/3.png"
                alt="Students Management"
                className="w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SharedCentersPage;
