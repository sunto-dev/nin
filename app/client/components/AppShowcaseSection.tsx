"use client";

import React from "react";
import { Button } from "@/components/ui/button";

const AppShowcaseSection = () => {
  const appFeatures = [
    {
      icon: "🔮",
      title: "คำทายดวง",
      description: "จากการไปดวงของคุณที่เกี่ยวกับ การเคลื่อนที่ของดวงดาว",
    },
    {
      icon: "❓",
      title: "สะสมความ",
      description: "เพื่อแลกจำนวนรู หรือ คอร์สเรียนกับ สถาบันบารโคดชีวิต",
    },
    {
      icon: "💬",
      title: "แจ้งเตือนเมื่อดวงย้าย",
      description:
        "บอกผลครกทระมอสยช่วย อำนวยเดียวกันใ้อการเคลื่อนที่ของ ข้อมูลส่วนตัว",
    },
    {
      icon: "🏠",
      title: "ไม่เก็บข้อมูลส่วนตัว",
      description:
        "ใช้คุวบคุณและวอลาดิกในการ สมัครขังไม่ต้องกังวลเรื่อง ข้อมูลส่วนตัว",
    },
  ];

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            จุดเด่นของเรา
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Mobile App Mockup */}
          <div className="relative order-2 lg:order-1">
            <div className="mx-auto w-80 h-[640px] bg-black rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gray-100 px-4 py-3 flex justify-between items-center text-sm border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full relative">
                        <div className="absolute inset-1 bg-orange-400 rounded-full"></div>
                      </div>
                    </div>
                    <span className="text-xs font-medium">
                      ชินแสบารโคดชีวิต
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full font-medium">
                      📅 30 วัน
                    </span>
                    <span className="bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full font-medium">
                      🪙 0 คะแนน
                    </span>
                  </div>
                </div>

                {/* Navigation Icons */}
                <div className="grid grid-cols-4 gap-2 p-4 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-1 hover:bg-blue-200 transition-colors">
                      <span className="text-xl">🏠</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      หน้าหลัก
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-1 hover:bg-purple-200 transition-colors">
                      <span className="text-xl">👤</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      ข้อมูล
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-1 hover:bg-yellow-200 transition-colors">
                      <span className="text-xl">🏆</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      โบนัส
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-1 hover:bg-green-200 transition-colors">
                      <span className="text-xl">🔔</span>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      แจ้งเตือน
                    </span>
                  </div>
                </div>

                {/* Game Cards */}
                <div className="p-4 space-y-3">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-4 text-white shadow-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-sm">
                          🎮 10ตีไพ่ประจำวัน
                        </h3>
                        <p className="text-xs opacity-90">สุ่มไพ่ 3 ใบ</p>
                      </div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors">
                        เล่นเลย
                      </button>
                    </div>
                  </div>

                  {/* Horoscope Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg aspect-square flex items-center justify-center hover:from-blue-200 hover:to-purple-200 transition-colors"
                      >
                        <span className="text-2xl">🌟</span>
                      </div>
                    ))}
                  </div>

                  {/* Daily Fortune */}
                  <div className="bg-gradient-to-r from-orange-400 to-yellow-400 rounded-xl p-4 text-white shadow-lg">
                    <div className="flex items-center justify-center">
                      <span className="text-lg font-semibold">🍀 เสียใจ</span>
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="bg-gray-100 rounded-xl p-4 border-2 border-dashed border-gray-300">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">🏆</span>
                      <span className="text-sm font-medium text-gray-600">
                        โบนัส เงิน
                      </span>
                      <span className="text-xl">🏆</span>
                    </div>
                  </div>

                  {/* Bottom Game */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white shadow-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-sm">
                          🎲 ชินแสบาเกอร์วัน
                        </h3>
                        <p className="text-xs opacity-90">สุ่มดู 10 วัน !!!</p>
                      </div>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold transition-colors">
                        เล่นเลย
                      </button>
                    </div>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="text-center p-2">
                  <p className="text-xs text-gray-500">
                    แจกโคดเฝียแนไฟไม่มีจุดใ้ทองลองใช้ฟรี
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8 order-1 lg:order-2">
            {appFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 group hover:transform hover:translateX-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0 group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
