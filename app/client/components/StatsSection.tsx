'use client';

import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      icon: '👤',
      number: '390,306',
      label: 'จำนวนผู้ใช้งาน'
    },
    {
      icon: '📱',
      number: '140,287',
      label: 'จำนวนการซื้อแพคเกจ'
    },
    {
      icon: '👥',
      number: '344,877',
      label: 'จำนวนการแนะนำเพื่อน'
    },
    {
      icon: '🛡️',
      number: '923,924',
      label: 'จำนวนเซิมบรรยาก'
    }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              {/* Icon */}
              <div className="text-4xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              
              {/* Label */}
              <p className="text-gray-300 text-sm lg:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;