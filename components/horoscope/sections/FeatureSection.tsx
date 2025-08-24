'use client';

import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      icon: '💰',
      title: 'ไม่งง',
      subtitle: 'ไม่โยกศาสต์',
      description: 'ไม่ง่ายรีสะเดาะคราะห์'
    },
    {
      icon: '🏆',
      title: 'เน้นไม่มีลิส',
      subtitle: 'เพื่อให้รับมือกับ',
      description: 'สิ่งที่จะเกิดขึ้นอย่างบิลส'
    },
    {
      icon: '🤝',
      title: 'เข้าใจง่าย',
      subtitle: 'ใช้ภาษาที่เข้าใจง่าย',
      description: 'อ่านออกเดียวเข้าใจกันที'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            สิ่งที่เราแตกต่าง
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ชินแสบารโคดชีวิต ถูกพัฒนาขึ้นมาเพื่อวิเคราะห์ บารโคดชีวิตของแต่ละบุคคล เกี่ยวกับ
            ข้อมูลใหราศีศาสตร์อ้างสถิติ กว่า 10 ปี เพื่อนำมาบอกเป็นเรื่องราว และแนะนำให้คุณ
            รับมือกับสิ่งที่จะเกิดขึ้น
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-3xl">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-gray-600 mb-2 font-medium">
                {feature.subtitle}
              </p>
              
              {/* Description */}
              <p className="text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">
            จุดเด่นของเรา
          </h3>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;