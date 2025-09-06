'use client'
import { useEffect, useState } from 'react'

export default function CallbackPage() {
  const [status, setStatus] = useState('กำลังโหลด...')

  useEffect(() => {
    // ตรวจสอบ URL parameters หรือ token
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    const state = urlParams.get('state')
    
    console.log('Callback received:', { code, state })
    
    // อาจจะ redirect ไปหน้าหลักหลังจาก 2 วินาที
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
    
    setStatus('เข้าสู่ระบบสำเร็จ กำลังเปลี่ยนหน้า...')
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-xl mb-4">LINE Authentication</h1>
        <p>{status}</p>
      </div>
    </div>
  )
}
