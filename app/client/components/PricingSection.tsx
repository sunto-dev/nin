'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const plans = [
    {
      title: 'ชื่อวันเพิ่ม',
      price: '+30',
      unit: 'วัน',
      cost: '299',
      currency: 'บาท',
      description: 'แพคเกจเริ่มต้น',
      note: '*ราคาพิเศษสำหรับนักเรียนอายุไม่เกิน 22 ปี',
      buttonText: 'ลองใช้ฟรี',
      buttonStyle: 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300',
      cardStyle: 'bg-gradient-to-br from-slate-600 to-slate-800 text-white',
      isPopular: false,
      features: []
    },
    {
      title: 'ชื่อวันเพิ่ม',
      price: '+180',
      unit: 'วัน',
      cost: '1,495',
      currency: 'บาท',
      description: 'จ่าย 5 ฟรี 1 เดือน',
      note: '*ไม่มีการติดต่องเล็ดไ้ทีเด็ด',
      buttonText: 'ลองใช้ฟรี',
      buttonStyle: 'bg-slate-800 text-white hover:bg-slate-900',
      cardStyle: 'bg-gradient-to-br from-blue-500 to-blue-700 text-white',
      isPopular: true,
      discount: 'Save 17%',
      features: []
    },
    {
      title: 'ชื่อวันเพิ่ม',
      price: '+395',
      unit: 'วัน',
      cost: '2,990',
      currency: 'บาท',
      description: 'จ่าย 10 ฟรี 3 เดือน',
      note: '*ไม่มีการติดต่องเล็ดไ้ทีเด็ด',
      buttonText: 'ลองใช้ฟรี',
      buttonStyle: 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300',
      cardStyle: 'bg-gradient-to-br from-slate-600 to-slate-800 text-white',
      isPopular: false,
      discount: 'Save 23%',
      features: []
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-blue-600 font-medium mb-2">แพคเกจที่เหมาะกับ</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-8">
            ราคาแพคเกจ
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-3xl p-8 shadow-xl relative transform hover:scale-105 transition-all duration-300 ${plan.cardStyle}`}>
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500 text-white px-4 py-2 text-sm font-semibold">
                    แนะนำ
                  </Badge>
                </div>
              )}

              {/* Discount Badge */}
              {plan.discount && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-red-500 text-white px-3 py-1 text-xs font-semibold">
                    {plan.discount}
                  </Badge>
                </div>
              )}

              {/* Plan Title */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                
                {/* Price */}
                <div className="mb-4">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-lg ml-2">{plan.unit}</span>
                </div>
                
                {/* Cost */}
                <div className="mb-2">
                  <span className="text-2xl font-semibold">ราคา {plan.cost} {plan.currency}</span>
                </div>
                
                {/* Description */}
                <p className="opacity-90 mb-4">{plan.description}</p>
              </div>

              {/* Button */}
              <Button className={`w-full py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </Button>

              {/* Note */}
              <p className="text-xs opacity-80 mt-4 text-center">
                {plan.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;