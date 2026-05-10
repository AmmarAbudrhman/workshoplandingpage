"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
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
          <div className="grid gap-8 md:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-48 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6 mb-6" />
                  <div className="grid grid-cols-2 gap-4 border-t pt-4">
                    <div>
                      <Skeleton className="h-3 w-1/2 mb-2" />
                      <Skeleton className="h-5 w-1/4" />
                    </div>
                    <div>
                      <Skeleton className="h-3 w-1/2 mb-2" />
                      <Skeleton className="h-5 w-1/4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : isError ? (
          <div className="py-20 text-center">
            <p className="mb-4 text-destructive">
              حدث خطأ أثناء تحميل المراكز.
            </p>
            <Button onClick={() => window.location.reload()}>
              إعادة المحاولة
            </Button>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-3">
            {centersData?.data.data.map((center) => (
              <Card
                key={center.name}
                className="group overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={center.ceneterLogo || "/placeholderimage.png"}
                    alt={center.name}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
                </div>

                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {center.name}
                  </h3>
                  <p className="mb-6 line-clamp-2 min-h-[40px] text-sm leading-relaxed text-muted-foreground">
                    {center.description || "لا يوجد وصف متاح"}
                  </p>

                  <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
                    <div>
                      <p className="mb-1 text-xs text-muted-foreground">
                        عدد الطلاب
                      </p>
                      <p className="font-bold text-primary">
                        {center.studentsCount}
                      </p>
                    </div>
                    <div>
                      <p className="mb-1 text-xs text-muted-foreground">
                        عدد المعلمين
                      </p>
                      <p className="font-bold text-primary">
                        {center.teachersCount}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
