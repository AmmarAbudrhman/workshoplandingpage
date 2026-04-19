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
  );
};

export default Team;
