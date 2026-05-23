import { BookOpen, CheckCircle2, Trophy } from "lucide-react";

const About = () => {
  return (
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
              desc: "تعاني كثير من الورش والمشاريع الهندسية من صعوبة في تتبع سير العمل وإدارة الموارد بشكل منظم.",
            },
            {
              title: "الحل",
              icon: <CheckCircle2 />,
              desc: "منصة ورشتي تقدم نظامًا رقميًا متكاملًا لإدارة المهام، تتبع الصيانة، وإدارة الفرق الفنية بتقارير احترافية.",
            },
            {
              title: "الرؤية",
              icon: <Trophy />,
              desc: "تحويل قطاع الورش والهندسة إلى بيئة عمل رقمية ذكية ترفع الكفاءة وتضمن الجودة العالية.",
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
  );
};

export default About;
