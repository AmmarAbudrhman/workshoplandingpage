"use client";

import { Building2, Users2, GraduationCap, BookOpen } from "lucide-react";
import { useGetCenters } from "@/hooks/useCenter";

const Stats = () => {
  const { data: centersData } = useGetCenters();

  const stats = [
    {
      label: "مراكز نشطة",
      value: centersData?.pagination.totalItems.toString() || "...",
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

  return (
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
  );
};

export default Stats;
