'use client'

import Spline from '@splinetool/react-spline'

export default function PruebasPage() {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
      <p className="text-slate-500 text-xs mb-4 uppercase tracking-widest">Prueba Spline</p>
      <div className="w-full max-w-3xl h-[600px] rounded-2xl overflow-hidden">
        <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>
    </div>
  )
}
