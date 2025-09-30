"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import {
  Menu,
  Sparkles,
  Star,
  BookOpen,
  DollarSign,
  HelpCircle,
  Pointer,
  LogIn,
  Loader2,
  LogOut,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useLiff } from "@/provider/liff-provider";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const ShadcnNavbar = () => {
  const { isScrolled } = useScrollPosition();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { liffReady, liffUser, isLoggedIn, login, logout, isLoading } =
    useLiff();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  const navigationItems = [
    {
      title: "บารโคดชีวิตคืออะไร?",
      description: "เรียนรู้เกี่ยวกับระบบการอ่านดวงแบบใหม่",
      icon: Sparkles,
      onClick: () => scrollToSection("features"),
    },
    {
      title: "ราคาแพคเกจ",
      description: "แพคเกจที่เหมาะกับคุณ พร้อมราคาพิเศษ",
      icon: DollarSign,
      onClick: () => scrollToSection("pricing"),
    },
    {
      title: "คอร์สเรียน",
      description: "เรียนรู้การอ่านบารโคดชีวิตด้วยตัวเอง",
      icon: BookOpen,
      onClick: () => scrollToSection("courses"),
    },
    {
      title: "คำถามที่พบบ่อย",
      description: "คำตอบสำหรับคำถามยอดนิยม",
      icon: HelpCircle,
      onClick: () => scrollToSection("faq"),
    },
  ];

  const renderUserSection = () => {
    // เพิ่ม debug log
    console.log("Navbar render states:", {
      isLoading,
      liffReady,
      isLoggedIn,
      hasUser: !!liffUser
    });

    if (isLoading) {
      return (
        <div className="flex items-center space-x-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">กำลังโหลด...</span>
        </div>
      );
    }

    // เพิ่มเงื่อนไขตรวจสอบ liffReady
    if (!liffReady) {
      return (
        <div className="flex items-center space-x-2">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">เตรียมระบบ...</span>
        </div>
      );
    }

    if (!isLoggedIn || !liffUser) {
      return (
        <Button
          size="sm"
          variant="outline"
          onClick={login}
          className={cn(
            "cursor-pointer transition-all duration-300 ",
            isScrolled
              ? "border-border text-foreground hover:bg-accent"
              : "border-white/20 text-black hover:bg-white hover:text-green-500"
          )}
        >
          <LogIn className="w-4 h-4 mr-2 text-black " />
          เข้าสู่ระบบด้วย LINE
        </Button>
      );
    }
    return (
      <div className="flex item-center space-x-3">
        <Avatar className="cursor-pointer " onClick={logout}>
          <AvatarImage src={liffUser.pictureUrl} alt={liffUser.displayName} />
          <AvatarFallback>
            {liffUser.displayName?.charAt(0) || "U"}
          </AvatarFallback>
        </Avatar>
        <div className="hidden sm:block">
          <p
            className={cn(
              "text-sm font-medium",
              isScrolled ? "text-foreground" : "text-white/80"
            )}
          >
            {liffUser.displayName}
          </p>
          <Button
            size="sm"
            variant="ghost"
            onClick={logout}
            className={cn(
              "cursor-pointer h-auto p-0 text-xs",
              isScrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/70 "
            )}
          >
            <LogOut className="w-3 h-3 mr-1" />
            ออกจากระบบ
          </Button>
        </div>
      </div>
    );
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-border/40"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center relative shadow-lg">
                <div className="w-6 h-6 bg-gradient-to-r from-yellow-200 to-orange-100 rounded-full relative overflow-hidden">
                  <div className="absolute inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                  <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full"></div>
                </div>
                <div className="absolute -right-1 -top-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div>
              <h1
                className={cn(
                  "font-bold text-lg transition-colors duration-300",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                ชินแสบารโคดชีวิต
              </h1>
              <p
                className={cn(
                  "text-xs transition-colors duration-300",
                  isScrolled ? "text-muted-foreground" : "text-white/80"
                )}
              >
                ระบบดูดวงยุคใหม่
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={cn(
                  "cursor-pointer transition-all duration-300 hover:scale-105",
                  isScrolled
                    ? "text-foreground hover:text-primary hover:bg-accent/50"
                    : "text-white hover:text-orange-300 hover:bg-white/10"
                )}
                onClick={item.onClick}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.title}
              </Button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {renderUserSection()}

            {/* <Avatar>
              <AvatarImage src={liffUser?.pictureUrl} />
              <AvatarFallback>{liffUser?.displayName}</AvatarFallback>
            </Avatar> */}

            {/* Mobile Menu */}
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className={cn(
                    "cursor-pointer lg:hidden transition-colors duration-300",
                    isScrolled
                      ? "text-foreground hover:bg-accent"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded-full relative">
                        <div className="absolute inset-1 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                    <span>ชินแสบารโคดชีวิต</span>
                  </SheetTitle>
                  <SheetDescription>
                    เมนูหลัก - ระบบดูดวงยุคใหม่
                  </SheetDescription>
                </SheetHeader>

                <div className="mt-8 space-y-4">
                  {navigationItems.map((item, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      className="cursor-pointer w-full justify-start h-auto p-4 text-left hover:bg-accent/50 transition-all duration-300"
                      onClick={item.onClick}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-100 to-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                          <div className="font-semibold text-sm text-foreground">
                            {item.title}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </div>
                    </Button>
                  ))}

                  <div className="pt-4 border-t">
                    <Button
                      className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      <Star className="w-4 h-4 mr-2" />
                      ทดลองใช้ฟรี
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ShadcnNavbar;
