"use client";

import { useState } from "react";
import { Loader2, ChevronRight, ChevronLeft, Search } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGetCenters } from "@/hooks/useCenter";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function CentersPage() {
  const [page, setPage] = useState(1);
  const pageSize = 100;

  const {
    data: centersData,
    isLoading,
    isError,
  } = useGetCenters({ page, pageSize });

  const centers = centersData?.data.data || [];
  const pagination = centersData?.data.pagination;

  return (
    <div className="min-h-screen bg-background pt-24 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            جميع المراكز المشتركة
          </h1>
          <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            استكشف شبكة مراكزنا التعليمية المتميزة وشركائنا في مسيرة النجاح
            والتميز الأكاديمي.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="w-16 h-16 text-primary animate-spin mb-6" />
            <p className="text-xl text-muted-foreground">
              جاري تحميل المراكز...
            </p>
          </div>
        ) : isError ? (
          <div className="text-center py-32 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
            <p className="text-destructive text-xl mb-6 font-semibold">
              حدث خطأ أثناء تحميل المراكز.
            </p>
            <Button size="lg" onClick={() => window.location.reload()}>
              إعادة المحاولة
            </Button>
          </div>
        ) : centers.length === 0 ? (
          <div className="text-center py-32 bg-muted/20 rounded-3xl border-2 border-dashed border-border">
            <p className="text-muted-foreground text-xl">
              لا توجد مراكز حالياً.
            </p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {centers.map((center) => (
                <Card
                  key={center.name}
                  className="group pt-0 overflow-hidden bg-card rounded-3xl border border-border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={center.ceneterLogo || "/placeholderimage.png"}
                      alt={center.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {center.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed line-clamp-2 min-h-[40px]">
                      {center.description || "لا يوجد وصف متاح"}
                    </p>

                    <div className="grid grid-cols-2 gap-4 border-t border-border pt-4">
                      <div className="bg-muted/30 p-3 rounded-2xl text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          عدد الطلاب
                        </p>
                        <p className="text-xl font-bold text-primary">
                          {center.studentsCount}
                        </p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-2xl text-center">
                        <p className="text-xs text-muted-foreground mb-1">
                          عدد المعلمين
                        </p>
                        <p className="text-xl font-bold text-primary">
                          {center.teachersCount}
                        </p>
                      </div>
                      <Link
                        href={`https://ratil-project.netlify.app/?cName=${center.name}`}
                        target="_blank"
                        className={cn(
                          buttonVariants({ variant: "default", size: "lg" }),
                          "col-span-2",
                        )}
                      >
                        عرض موقع المركز
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
