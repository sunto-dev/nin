"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    isUnknownTime: false,
  });

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];
  const years = Array.from({ length: 100 }, (_, i) => 2024 - i);

  // สร้าง array สำหรับชั่วโมง (00-23)
  const hours = Array.from({ length: 24 }, (_, i) => ({
    value: i.toString().padStart(2, "0"),
    label: i.toString().padStart(2, "0"),
  }));

  // สร้าง array สำหรับนาที (00-59)
  const minutes = Array.from({ length: 60 }, (_, i) => ({
    value: i.toString().padStart(2, "0"),
    label: i.toString().padStart(2, "0"),
  }));

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 relative overflow-hidden">
      {/* Background stars effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic3RhcnMiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48Y2lyY2xlIGN4PSIxMDAiIGN5PSIxMDAiIHI9IjEiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjMiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIwLjUiIGZpbGw9IndoaXRlIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSIxNTAiIGN5PSI3NSIgcj0iMS41IiBmaWxsPSJ3aGl0ZSIgb3BhY2l0eT0iMC4yIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXJzKSIvPjwvc3ZnPg==')] opacity-30"></div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Spacer for sticky navbar */}
        <div className="h-20"></div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <Card className="bg-white/10 backdrop-blur-md border border-white/20 text-white">
            <CardContent className="p-8 space-y-8">
              {/* Video Section */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center relative shadow-lg">
                  <svg
                    className="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M8 5v10l8-5-8-5z" />
                  </svg>
                  <div className="absolute inset-0 bg-white opacity-20 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <p className="text-sm opacity-90 font-medium">เจ้าจุญกคุณ</p>
                  <p className="text-sm opacity-90">และจุญหนต</p>
                </div>
              </div>

              <div className="space-y-6">
                <CardHeader className="p-0">
                  <CardTitle className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                    ชินแสบารโคดชีวิต
                  </CardTitle>
                </CardHeader>

                <h2 className="text-2xl lg:text-3xl font-semibold leading-relaxed">
                  ชินแสประจำตัว ที่คอยเตือนคุณ
                  <br />
                  <span className="text-orange-300">ให้ใช้ชีวิตอย่างบิลส</span>
                </h2>

                <p className="text-lg opacity-90 leading-relaxed max-w-md">
                  แจ้งเตือนเมื่อดวงของคุณเปลี่ยน
                  <br />
                  จากการเคลื่อนที่ของดาว ผ่านระบบ{" "}
                  <span className="font-semibold text-green-300">LINE OA</span>
                </p>

                <Button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-lg px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  ลองใช้ชินแสบารโคดชีวิตฟรี
                </Button>

                <div className="text-sm space-y-1 opacity-80">
                  <p>
                    <span className="text-orange-300">*</span>ทดลองใช้ฟรี 7 วัน
                    หรือ 30 วันเมื่อโโดแนนคงแนะน
                  </p>
                  <p>
                    <span className="text-orange-300">*</span>
                    ราคาพิเซษสำหรับนักเรียนอายุไม่เกิน 22 ปี
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Right Content - Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              กรอกข้อมูลเพื่อดูพยากรณ์
            </h3>

            <form className="space-y-5">
              {/* Name */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700 mb-2 items-center gap-2">
                  <span className="text-lg">🏷️</span>
                  ชื่อจริง
                </label>
                <Input
                  placeholder="นาย.. , นาง.."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-12 rounded-lg border-2 border-gray-200 focus:border-orange-400"
                />
                <label className="block text-sm font-medium text-gray-700 mb-2 items-center gap-2">
                  <span className="text-lg">🏷️</span>
                  นามสกุล
                </label>
                <Input
                  placeholder="นามสกุล"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full h-12 rounded-lg border-2 border-gray-200 focus:border-orange-400"
                />
              </div>

              {/* Birth Date */}
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    วันที่
                  </label>
                  <Select
                    value={formData.day}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, day: value })
                    }
                  >
                    <SelectTrigger className="h-12 rounded-lg border-2">
                      <SelectValue placeholder="วัน" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={day.toString()}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    เดือน
                  </label>
                  <Select
                    value={formData.month}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, month: value })
                    }
                  >
                    <SelectTrigger className="h-12 rounded-lg border-2">
                      <SelectValue placeholder="เดือน" />
                    </SelectTrigger>
                    <SelectContent>
                      {months.map((month, index) => (
                        <SelectItem key={index} value={(index + 1).toString()}>
                          {month}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ปี พ.ศ.
                  </label>
                  <Select
                    value={formData.year}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, year: value })
                    }
                  >
                    <SelectTrigger className="h-12 rounded-lg border-2">
                      <SelectValue placeholder="ปี" />
                    </SelectTrigger>
                    <SelectContent>
                      {years.map((year) => (
                        <SelectItem key={year} value={(year + 543).toString()}>
                          {year + 543}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Birth Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  เวลาเกิด
                </label>
                <div className="flex gap-2">
                  {/* Dropdown สำหรับชั่วโมง */}
                  <Select
                    value={formData.hour}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, hour: value })
                    }
                  >
                    <SelectTrigger className="h-12 rounded-lg border-2 flex-1">
                      <SelectValue placeholder="ชั่วโมง" />
                    </SelectTrigger>
                    <SelectContent>
                      {hours.map((hour) => (
                        <SelectItem key={hour.value} value={hour.value}>
                          {hour.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <span className="flex items-center text-gray-500 font-medium">
                    :
                  </span>

                  {/* Dropdown สำหรับนาที */}
                  <Select
                    value={formData.minute}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, minute: value })
                    }
                  >
                    <SelectTrigger className="h-12 rounded-lg border-2 flex-1">
                      <SelectValue placeholder="นาที" />
                    </SelectTrigger>
                    <SelectContent>
                      {minutes.map((minute) => (
                        <SelectItem key={minute.value} value={minute.value}>
                          {minute.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {/* แสดงเวลาที่เลือก */}
                {formData.hour && formData.minute && (
                  <p className="text-sm text-gray-600 mt-2">
                    เวลาที่เลือก: {formData.hour}:{formData.minute} น.
                  </p>
                )}
              </div>

              {/* Unknown Time Checkbox */}
              <div className="flex items-center space-x-3">
                <Checkbox
                  id="unknown-time"
                  checked={formData.isUnknownTime}
                  onCheckedChange={(checked: any) =>
                    setFormData({ ...formData, isUnknownTime: !!checked })
                  }
                  className="w-5 h-5"
                />
                <label
                  htmlFor="unknown-time"
                  className="text-sm text-gray-700 font-medium"
                >
                  ไม่รู้เวลาเกิด
                </label>
              </div>

              {/* Time Zone */}
              {/*<div>
                <label className="block text-sm font-medium text-gray-700 mb-2 items-center gap-2">
                  <span className="text-lg">🌏</span>
                  โขษกาลเกิด
                </label>
                <Select>
                  <SelectTrigger className="h-12 rounded-lg border-2">
                    <SelectValue placeholder="เลือกเขตบางแทด" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thailand">ประเทศไทย</SelectItem>
                  </SelectContent>
                </Select>
              </div>*/}

              {/* Questions */}
              {
                <div className="space-y-4 bg-orange-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📱</span>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">
                        ต้องการเปลี่ยนเบอร์โทรศัพท์?
                      </p>
                      <p className="text-orange-600 font-semibold">
                        เบอร์โทรไหนถึงจะเหมาะกับเรา
                      </p>
                    </div>
                  </div>

                  {/*<div className="flex items-start space-x-3">
                    <span className="text-xl">⭐</span>
                    <div className="text-sm">
                      <p className="font-medium text-gray-700">
                        ใช้อีลิงกไทยมั่ว?
                      </p>
                      <p className="text-orange-600 font-semibold">
                        ไทยมั่ว 30 วัน
                      </p>
                    </div>
                  </div>*/}
                </div>
              }

              <Button className="cursor-pointer w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
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
