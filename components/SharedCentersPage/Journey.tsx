const Journey = () => {
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
  );
};

export default Journey;
