'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

const AppShowcaseSection = () => {
  const appFeatures = [
    {
      icon: '🔮',
      title: 'คำทายดวง',
      description: 'จากการไปดวงของคุณที่เกี่ยวกับ การเคลื่อนที่ของดวงดาว'
    },
    {
      icon: '❓',
      title: 'สะสมความ',
      description: 'เพื่อแลกจำนวนรู หรือ คอร์สเรียนกับ สถาบันบารโคดชีวิต'
    },
    {
      icon: '🏠',
      title: 'แจ้งเตือนเมื่อดวงย้าย',
      description: 'บอกผลครกทระมอสยช่วย อำนวยเดียวกันใ้อการเคลื่อนที่ของ ข้อมูลส่วนตัว'
    },
    {
      icon: '🔍',
      title: 'ไม่เก็บข้อมูลส่วนตัว',
      description: 'ใช้คุวบคุณและวอลาดิกในการ สมัครขังไม่ต้องกังวลเรื่อง ข้อมูลส่วนตัว'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
            จุดเด่นของเรา
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Mobile App Mockup */}
          <div className="relative">
            <div className="mx-auto w-80 h-[600px] bg-black rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status Bar */}
                <div className="bg-gray-100 px-4 py-2 flex justify-between items-center text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <span className="text-xs">ชินแสบารโคดชีวิต</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs">
                    <span className="bg-blue-100 px-2 py-1 rounded">30 วัน</span>
                    <span className="bg-yellow-100 px-2 py-1 rounded">0 คะแนน</span>
                  </div>
                </div>

                {/* Navigation Icons */}
                <div className="grid grid-cols-4 gap-2 p-4 bg-gray-50">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-xl">🏠</span>
                    </div>
                    <span className="text-xs">หน้าหลัก</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-xl">👤</span>
                    </div>
                    <span className="text-xs">ข้อมูล</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-xl">🏆</span>
                    </div>
                    <span className="text-xs">โบนัส</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <span className="text-xl">🔔</span>
                    </div>
                    <span className="text-xs">แจ้งเตือน</span>
                  </div>
                </div>

                {/* Game Cards */}
                <div className="p-4 space-y-4">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold">🎮 10ตีไพ่ประจำวัน</h3>
                        <p className="text-sm opacity-80">สุ่มไพ่ 3 ใบ</p>
                      </div>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        เล่นเลย
                      </Button>
                    </div>
                  </div>

                  {/* Horoscope Cards */}
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center">
                        <span className="text-2xl">🌟</span>
                      </div>
                    ))}
                  </div>

                  {/* Daily Fortune */}
                  <div className="bg-orange-400 rounded-lg p-4 text-white">
                    <div className="flex items-center justify-center">
                      <span className="text-lg">🍀 เสียใจ</span>
                    </div>
                  </div>

                  {/* Achievement */}
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-xl">🏆</span>
                      <span className="text-sm">โบนัส เงิน</span>
                      <span className="text-xl">🏆</span>
                    </div>
                  </div>

                  {/* Bottom Game */}
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-4 text-white">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold">🎲 ชินแสบาเกอร์วัน</h3>
                        <p className="text-sm opacity-80">สุ่มดู 10 วัน !!!</p>
                      </div>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        เล่นเลย
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Bottom text */}
                <div className="text-center p-2">
                  <p className="text-xs text-gray-500">แจกโคดเฝียแนไฟไม่มีจุดใ้ทองลองใช้ฟรี</p>
                </div>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-8">
            {appFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
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