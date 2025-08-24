"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { Menu, X } from "lucide-react";

const StickyNavbar = () => {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center relative">
              <div className="w-6 h-6 bg-gray-200 rounded-full relative overflow-hidden">
                <div className="absolute inset-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full"></div>
              </div>
              <div className="absolute -right-1 -top-1 w-3 h-3 bg-orange-400 rounded-full"></div>
            </div>
            <span
              className={`font-bold text-lg transition-colors duration-300 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              ชินแสบารโคดชีวิต
            </span>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden lg:flex space-x-8 transition-colors duration-300 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-orange-500 transition-colors"
            >
              บารโคดชีวิตคืออะไร?
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="hover:text-orange-500 transition-colors"
            >
              ราคาแพคเกจ
            </button>
            <button
              onClick={() => scrollToSection("courses")}
              className="hover:text-orange-500 transition-colors"
            >
              คอร์สเรียน
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="hover:text-orange-500 transition-colors"
            >
              คำถามที่พบบ่อย
            </button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ">
              ทดลองใช้ฟรี
            </Button>

            <div className="hidden sm:flex items-center space-x-2 text-white text-sm bg-green-500 px-3 py-1 rounded-full">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>ประกาศบบโดยกม</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? "text-gray-800 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className={`lg:hidden mt-4 pb-4 border-t ${
              isScrolled ? "border-gray-200" : "border-white/20"
            }`}
          >
            <div className="pt-4 space-y-3">
              <button
                onClick={() => scrollToSection("features")}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                บารโคดชีวิตคืออะไร?
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                ราคาแพคเกจ
              </button>
              <button
                onClick={() => scrollToSection("courses")}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                คอร์สเรียน
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className={`block w-full text-left py-2 px-4 rounded-lg transition-colors ${
                  isScrolled
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
              >
                คำถามที่พบบ่อย
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default StickyNavbar;
