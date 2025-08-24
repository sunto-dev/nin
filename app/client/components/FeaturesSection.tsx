'use client';

import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">$</span>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      ),
      title: 'ไม่งง',
      subtitle: 'ไม่โยกศาสต์',
      description: 'ไม่ง่ายรีสะเดาะคราะห์'
    },
    {
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
          </div>
          <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full"></div>
        </div>
      ),
      title: 'เน้นไม่มีลิส',
      subtitle: 'เพื่อให้รับมือกับ',
      description: 'สิ่งที่จะเกิดขึ้นอย่างบิลส'
    },
    {
      icon: (
        <div className="relative">
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          </div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-400 rounded-full"></div>
        </div>
      ),
      title: 'เข้าใจง่าย',
      subtitle: 'ใช้ภาษาที่เข้าใจง่าย',
      description: 'อ่านออกเดียวเข้าใจกันที'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            สิ่งที่เราแตกต่าง
          </h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-blue-600">ชินแสบารโคดชีวิต</span> ถูกพัฒนาขึ้นมาเพื่อวิเคราะห์ บารโคดชีวิตของแต่ละบุคคล เกี่ยวกับ
              ข้อมูลใหราศีศาสตร์อ้างสถิติ กว่า <span className="font-semibold text-orange-600">10 ปี</span> เพื่อนำมาบอกเป็นเรื่องราว และแนะนำให้คุณ
              รับมือกับสิ่งที่จะเกิดขึ้น
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              {/* Icon */}
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-blue-100 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-gray-600 mb-2 font-medium">
                {feature.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            จุดเด่นของเรา
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;