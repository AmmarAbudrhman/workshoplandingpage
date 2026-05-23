"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod/v3";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Field,
  FieldLabel,
  FieldError,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateCenter } from "@/hooks/useCenter";
import { Loader2 } from "lucide-react";

const centerSchema = z.object({
  CenterName: z.string().min(1, "اسم الورشة مطلوب"),
  PhoneNumber: z.string().optional(),
  Email: z
    .string()
    .email("بريد إلكتروني غير صالح")
    .optional()
    .or(z.literal("")),
  ManagerName: z.string().min(1, "اسم المدير مطلوب"),
  Password: z.string().min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل"),
  LogoImage: z.any().optional(),
  Plan: z.enum(["Free", "Paid"], {
    required_error: "يرجى اختيار باقة الاشتراك",
  }),
});

type CenterFormValues = z.infer<typeof centerSchema>;

export function JoinCenterDialog() {
  const [open, setOpen] = useState(false);
  const [fileLogo, setFileLogo] = useState<File | null>(null);
  const [fileImage, setFileImage] = useState<File | null>(null);

  const form = useForm<CenterFormValues>({
    resolver: zodResolver(centerSchema),
    defaultValues: {
      CenterName: "",
      PhoneNumber: "",
      Email: "",
      ManagerName: "",
      Password: "",
      Plan: "Free",
    },
  });

  const { mutate, isPending } = useCreateCenter();

  const onSubmit = (values: CenterFormValues) => {
    const formData = new FormData();
    formData.append("CenterName", values.CenterName);
    if (values.PhoneNumber) formData.append("PhoneNumber", values.PhoneNumber);
    if (values.Email) formData.append("Email", values.Email);
    formData.append("ManagerName", values.ManagerName);
    formData.append("Password", values.Password);
    formData.append("Plan", values.Plan);
    if (fileLogo) {
      formData.append("LogoImage", fileLogo);
    }
    if (fileImage) {
      formData.append("Image", fileImage);
    }

    mutate(formData, {
      onSuccess: (data) => {
        if (data.isSuccess) {
          toast.success("تم إرسال طلبك بنجاح");
          setOpen(false);
          form.reset();
          setFileImage(null);
          setFileLogo(null);
        }
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer"
          >
            طلب الانضمام
          </Button>
        }
      />
      <DialogContent className="sm:max-w-[500px] overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-right">طلب الانضمام</DialogTitle>
          <DialogDescription className="text-right">
            قم بتعبئة البيانات التالية لطلب إنشاء ورشة جديدة على المنصة
          </DialogDescription>
        </DialogHeader>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-4 text-right"
        >
          <FieldGroup>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              <Controller
                control={form.control}
                name="CenterName"
                render={({ field, fieldState }) => (
                  <Field data-invalid={!!fieldState.error}>
                    <FieldLabel>اسم الورشة *</FieldLabel>
                    <Input
                      placeholder="ورشة الاتقان الهندسية"
                      {...field}
                      className="text-right"
                      aria-invalid={!!fieldState.error}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Controller
                control={form.control}
                name="PhoneNumber"
                render={({ field, fieldState }) => (
                  <Field data-invalid={!!fieldState.error}>
                    <FieldLabel>رقم الهاتف</FieldLabel>
                    <Input
                      placeholder="7xxxxxxxxx"
                      {...field}
                      className="text-right"
                      aria-invalid={!!fieldState.error}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
              <Controller
                control={form.control}
                name="Email"
                render={({ field, fieldState }) => (
                  <Field data-invalid={!!fieldState.error}>
                    <FieldLabel>البريد الإلكتروني</FieldLabel>
                    <Input
                      placeholder="example@mail.com"
                      {...field}
                      className="text-right"
                      aria-invalid={!!fieldState.error}
                    />
                    <FieldError errors={[fieldState.error]} />
                  </Field>
                )}
              />
            </div>

            <Controller
              control={form.control}
              name="ManagerName"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error}>
                  <FieldLabel>اسم المدير *</FieldLabel>
                  <Input
                    placeholder="الاسم الكامل"
                    {...field}
                    className="text-right"
                    aria-invalid={!!fieldState.error}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="Password"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error}>
                  <FieldLabel>كلمة المرور *</FieldLabel>
                  <Input
                    type="password"
                    placeholder="******"
                    {...field}
                    className="text-right"
                    aria-invalid={!!fieldState.error}
                  />
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Controller
              control={form.control}
              name="Plan"
              render={({ field, fieldState }) => (
                <Field data-invalid={!!fieldState.error}>
                  <FieldLabel>باقة الاشتراك *</FieldLabel>
                  <select
                    {...field}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-right appearance-none"
                    aria-invalid={!!fieldState.error}
                  >
                    <option value="Free">الباقة المجانية (3 أشهر)</option>
                    <option value="Paid">الباقة السنوية (سنة كاملة)</option>
                  </select>
                  <FieldError errors={[fieldState.error]} />
                </Field>
              )}
            />

            <Field>
              <FieldLabel>شعار المركز</FieldLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setFileLogo(e.target.files?.[0] || null)}
                className="text-right"
              />
            </Field>
            <Field>
              <FieldLabel>صورة المركز</FieldLabel>
              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setFileImage(e.target.files?.[0] || null)}
                className="text-right"
              />
            </Field>
          </FieldGroup>

          <div className="flex justify-end gap-3 pt-4">
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
              إرسال الطلب
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
