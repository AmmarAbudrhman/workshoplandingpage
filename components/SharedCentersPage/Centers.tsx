"use client";

import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetCenters } from "@/hooks/useCenter";

const Centers = () => {
  const {
    data: centersData,
    isLoading,
    isError,
  } = useGetCenters({ page: 1, pageSize: 3 });

  return (
    <section id="centers" className="py-24 px-6 bg-muted/30 min-h-[600px]">
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

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">جاري تحميل المراكز...</p>
          </div>
        ) : isError ? (
          <div className="text-center py-20">
            <p className="text-destructive mb-4">
              حدث خطأ أثناء تحميل المراكز.
            </p>
            <Button onClick={() => window.location.reload()}>
              إعادة المحاولة
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {centersData?.data.data.map((center) => (
              <div key={center.name}>
                <Card className="group pt-0 overflow-hidden bg-card rounded-3xl border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={center.ceneterLogo || "/placeholderimage.png"}
                      alt={center.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {center.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2 min-h-[40px]">
                      {center.description || "لا يوجد وصف متاح"}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-t border-border pt-4 mb-6">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          عدد الطلاب
                        </p>
                        <p className="font-bold text-primary">
                          {center.studentsCount}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">
                          عدد المعلمين
                        </p>
                        <p className="font-bold text-primary">
                          {center.teachersCount}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-center mt-8">
        <Link href="/centers">
          <Button className="w-full md:w-fit bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md shadow-primary/10">
            عرض المزيد
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Centers;
