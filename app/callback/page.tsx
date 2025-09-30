'use client'
import { useEffect, useState } from 'react'
import { useLiff } from '@/provider/liff-provider'

export default function CallbackPage() {
  const [status, setStatus] = useState('กำลังโหลด...')
  const [debugInfo, setDebugInfo] = useState<any>({})
  const { liffReady, isLoggedIn, liffUser } = useLiff()

  useEffect(() => {
    // ตรวจสอบ URL parameters
    const urlParams = new URLSearchParams(window.location.search)
    const code = urlParams.get('code')
    const state = urlParams.get('state')
    const error = urlParams.get('error')
    const errorDescription = urlParams.get('error_description')
    
    const info = {
      code,
      state,
      error,
      errorDescription,
      fullUrl: window.location.href,
      liffReady,
      isLoggedIn,
      userExists: !!liffUser
    }
    
    setDebugInfo(info)
    console.log('Callback received:', info)
    
    if (error) {
      setStatus(`เกิดข้อผิดพลาด: ${error} - ${errorDescription}`)
      return
    }
    
    if (liffReady && isLoggedIn) {
      setStatus('เข้าสู่ระบบสำเร็จ กำลังเปลี่ยนหน้า...')
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
    } else if (liffReady) {
      setStatus('LIFF พร้อมแล้ว แต่ยังไม่ได้ login สำเร็จ')
    } else {
      setStatus('กำลังเตรียม LIFF...')
    }
  }, [liffReady, isLoggedIn, liffUser])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl mb-4 font-bold text-gray-800">LINE Authentication</h1>
        <p className="text-lg mb-4 text-blue-600">{status}</p>
        
        {/* Debug Information */}
        <div className="mt-6 p-4 bg-gray-100 rounded text-left text-sm">
          <h3 className="font-bold mb-2">Debug Information:</h3>
          <pre className="whitespace-pre-wrap text-xs overflow-auto">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
        
        {liffUser && (
          <div className="mt-4 p-4 bg-green-100 rounded">
            <h3 className="font-bold text-green-800">User Info:</h3>
            <p className="text-green-700">{liffUser.displayName}</p>
          </div>
        )}
      </div>
    </div>
  )
}
