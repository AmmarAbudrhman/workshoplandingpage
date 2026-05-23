"use client";
import { Button } from "@/components/ui/button";
import { JoinCenterDialog } from "@/components/JoinCenterDialog";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-24 text-center overflow-hidden px-6"
    >
      <div className="absolute top-0 left-0 size-96 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 size-96 bg-secondary/10 blur-3xl rounded-full pointer-events-none"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-700">
          منصة <span className="text-primary"> ورشتي</span> — إدارة هندسية متكاملة
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 delay-200 duration-700">
          المنصة الرقمية الأولى لإدارة الورش والمشاريع الهندسية بكفاءة عالية، تتبع الصيانة، وإدارة الفرق والعملاء بذكاء.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 delay-300 duration-700">
          <Button
            size="lg"
            className="transition-all duration-300 shadow-lg shadow-primary/20"
            onClick={() =>
              document
                .getElementById("centers")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            عرض الورش
          </Button>
          <JoinCenterDialog />
        </div>
      </div>
    </section>
  );
};

export default Hero;
