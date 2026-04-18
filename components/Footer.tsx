import Link from "next/link";
import {
  LayoutDashboard,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {
  FaFacebookF as Facebook,
  FaWhatsapp as Whatsapp,
} from "react-icons/fa";
import { FaXTwitter as Twitter } from "react-icons/fa6";
import { FaInstagram as Instagram } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-20 overflow-hidden border-t border-border bg-card/30 px-4 pb-12 pt-20 backdrop-blur-md">
      {/* Decorative background glow */}
      <div className="absolute -top-24 -left-24 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />

      <div className="page-wrap relative z-10">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-90"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:scale-105 group-hover:rotate-3">
                <LayoutDashboard size={26} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight text-foreground leading-none">
                  نور
                </span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest mt-1">
                  نظام الإدارة الذكي
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground/80 max-w-xs">
              منصة رقمية متكاملة تهدف للارتقاء بإدارة مراكز تحفيظ القرآن الكريم
              والجمعيات التعليمية من خلال تقنيات حديثة وحلول ذكية.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/alfala7.center?mibextid=ZbWKwL",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: Twitter,
                  href: "https://x.com/AlFalah7Center?s=09",
                  color: "hover:bg-black",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/fala7center/?utm_source=qr&r=nametag",
                  color: "hover:bg-pink-600",
                },
                {
                  icon: Whatsapp,
                  href: "https://wa.me/967783049625",
                  color: "hover:bg-green-600",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl bg-muted/50 text-foreground transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-bold mb-8 flex items-center gap-2">
              <span className="h-4 w-1 bg-primary rounded-full" />
              المنصة
            </h4>
            <ul className="space-y-4 text-sm">
              {["عن نور", "المميزات", "الاشتراكات"].map((link) => (
                <li key={link}>
                  <Link
                    href="/"
                    className="group flex items-center text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="h-1 w-0 bg-primary rounded-full transition-all group-hover:w-2 group-hover:ml-2" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-foreground font-bold mb-8 flex items-center gap-2">
              <span className="h-4 w-1 bg-primary rounded-full" />
              تواصل معنا
            </h4>
            <div className="space-y-5 text-sm ">
              <a
                href="tel:+967783049625"
                className="group flex text-right items-center flex-row-reverse  gap-4 p-3 rounded-2xl bg-muted/30 transition-all hover:bg-muted/50 border border-transparent hover:border-primary/20"
                dir="ltr"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground font-medium uppercase">
                    اتصل بنا
                  </span>
                  <span className="font-semibold text-foreground">
                    +967 783049625
                  </span>
                </div>
              </a>

              {/* <a
                href="https://chat.whatsapp.com/LPcTHk9saM6HJR1mpfCDRF"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-3 rounded-2xl bg-muted/30 transition-all hover:bg-muted/50 border border-transparent hover:border-primary/20"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-background text-green-600 transition-colors group-hover:bg-green-600 group-hover:text-white">
                  <MessageCircle size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-muted-foreground font-medium uppercase text-right">
                    انضم إلينا
                  </span>
                  <span className="font-semibold text-foreground text-right">
                    مجتمع مركز الفلاح
                  </span>
                </div>
                <ExternalLink
                  size={14}
                  className="mr-auto opacity-0 transition-opacity group-hover:opacity-40"
                />
              </a> */}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-center gap-6 border-t border-border/50 pt-8 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {year} <span className="font-bold text-foreground">نور</span>{" "}
            — جميع الحقوق محفوظة. تم التطوير بواسطة{" "}
            <span className="font-semibold text-primary">فريق نور</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
