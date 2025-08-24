'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    day: '',
    month: '',
    year: '',
    time: '',
    birthTime: '',
    isUnknownTime: false
  });

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน', 'พฤษภาคม', 'มิถุนายน',
    'กรกฎาคม', 'สิงหาคม', 'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('/images/stars.png')] opacity-30"></div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Navigation */}
        <nav className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-purple-500 rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full relative">
                <div className="absolute inset-1 bg-orange-400 rounded-full"></div>
              </div>
            </div>
            <span className="text-white font-bold">ชินแสบารโคดชีวิต</span>
          </div>
          
          <div className="hidden md:flex space-x-6 text-white">
            <a href="#" className="hover:text-orange-300">บารโคดชีวิตคืออะไร?</a>
            <a href="#" className="hover:text-orange-300">ราคาแพคเกจ</a>
            <a href="#" className="hover:text-orange-300">คอร์สเรียน</a>
            <a href="#" className="hover:text-orange-300">คำถามที่พบบ่อย</a>
          </div>
          
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full">
            ทดลองใช้ฟรี
          </Button>
          
          <div className="flex items-center space-x-2 text-white text-sm">
            <span>ประกาศบบโดยกม</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            {/* Video Section */}
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 5v10l8-5-8-5z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm opacity-80">เจ้าจุญกคุณ</p>
                <p className="text-sm opacity-80">และจุญหนต</p>
              </div>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              ชินแสบารโคดชีวิต
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold">
              ชินแสประจำตัว ที่คอยเตือนคุณ<br />
              ให้ใช้ชีวิตอย่างบิลส
            </h2>
            
            <p className="text-lg opacity-90">
              แจ้งเตือนเมื่อดวงของคุณเปลี่ยน<br />
              จากการเคลื่อนที่ของดาว ผ่านระบบ LINE OA
            </p>
            
            <Button className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-4 rounded-full">
              ลองใช้ชินแสบารโคดชีวิตฟรี
            </Button>
            
            <div className="text-sm space-y-1 opacity-80">
              <p>*ทดลองใช้ฟรี 7 วัน หรือ 30 วันเมื่อโโดแนนคงแนะน</p>
              <p>*ราคาพิเซษสำหรับนักเรียนอายุไม่เกิน 22 ปี</p>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
              กรอกข้อมูลเพื่อลองได้เลียน
            </h3>
            
            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  🏷️ ชื่อจริงพื่อหไฟไฟล์
                </label>
                <Input
                  placeholder="เช่น 08123456789"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full"
                />
              </div>

              {/* Birth Date */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">วันที่</label>
                  <Select value={formData.day} onValueChange={(value) => setFormData({...formData, day: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="วัน" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map(day => (
                        <SelectItem key={day} value={day.toString()}>{day}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">เดือน</label>
                  <Select value={formData.month} onValueChange={(value) => setFormData({...formData, month: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="เดือน" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month, index) => (
                        <SelectItem key={index} value={(index + 1).toString()}>{month}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ปี พ.ศ.</label>
                  <Select value={formData.year} onValueChange={(value) => setFormData({...formData, year: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="ปี" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map(year => (
                        <SelectItem key={year} value={(year + 543).toString()}>{year + 543}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Birth Time */}
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ช่วงเวลา</label>
                  <Select value={formData.time} onValueChange={(value) => setFormData({...formData, time: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="โซ่" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">เช้า</SelectItem>
                      <SelectItem value="afternoon">บ่าย</SelectItem>
                      <SelectItem value="evening">เย็น</SelectItem>
                      <SelectItem value="night">คืน</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">นาที</label>
                  <Input
                    placeholder="นาที"
                    value={formData.birthTime}
                    onChange={(e) => setFormData({...formData, birthTime: e.target.value})}
                  />
                </div>
              </div>

              {/* Unknown Time Checkbox */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="unknown-time"
                  checked={formData.isUnknownTime}
                  onCheckedChange={(checked) => setFormData({...formData, isUnknownTime: !!checked})}
                />
                <label htmlFor="unknown-time" className="text-sm text-gray-700">
                  ไม่รู้เวลาเกิด
                </label>
              </div>

              {/* Time Zone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  🌏 โขษกาลเกิด
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="เลือกเขตบางแทด" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thailand">ประเทศไทย</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Questions */}
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500">📱</span>
                  <div className="text-sm">
                    <p className="font-medium">คุณใช้ดีไซน์ทำโลก?</p>
                    <p className="text-orange-500">ไม่ใช่ใส่เบอร์ไทยมั่ว 7 วัน</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-2">
                  <span className="text-orange-500">⭐</span>
                  <div className="text-sm">
                    <p className="font-medium">ใช้อีลิงกไทยมั่ว?</p>
                    <p className="text-orange-500">ไทยมั่ว 30 วัน</p>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg text-lg font-semibold">
                ส่งข้อมูล
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;