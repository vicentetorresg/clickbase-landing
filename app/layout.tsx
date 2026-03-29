import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Página Web + Google Ads + Tracking | ClickBase',
  description:
    'Landing page de alta conversión + Google Ads o Meta Ads + GTM + Meta Pixel. Setup desde $699.990 + IVA. Base lista para captar leads. ClickBase.',
  openGraph: {
    title: 'Página Web + Google Ads + Tracking | ClickBase',
    description:
      'Landing page de alta conversión + Google Ads o Meta Ads + GTM + Meta Pixel. Setup desde $699.990 + IVA. Base lista para captar leads. ClickBase.',
    type: 'website',
    locale: 'es_CL',
    // url: 'https://tu-dominio.cl', // TODO: Replace with real URL
    // images: [{ url: 'https://tu-dominio.cl/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Página Web + Google Ads + Tracking | ClickBase',
    description:
      'Landing page de alta conversión + Google Ads o Meta Ads + GTM + Meta Pixel. Setup desde $699.990 + IVA.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/*
          ================================================================
          GOOGLE TAG MANAGER - HEAD SCRIPT
          ================================================================
          INSTRUCCIONES:
          1. Reemplaza GTM-XXXXXXX con tu ID real de Google Tag Manager
          2. Descomenta el bloque de código de abajo
          3. Este script debe ir lo más arriba posible en el <head>
          ================================================================

          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
            }}
          />

          ================================================================
          META PIXEL - HEAD SCRIPT
          ================================================================
          INSTRUCCIONES:
          1. Reemplaza XXXXXXXXXXXXXXXX con tu Pixel ID real de Meta
          2. Descomenta el bloque de código de abajo
          3. Este script debe ir en el <head>
          ================================================================

          <script
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'XXXXXXXXXXXXXXXX');
              fbq('track', 'PageView');`,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=XXXXXXXXXXXXXXXX&ev=PageView&noscript=1"
            />
          </noscript>
        */}
      </head>
      <body className="bg-dark text-white antialiased">
        {/*
          ================================================================
          GOOGLE TAG MANAGER - NOSCRIPT (BODY)
          ================================================================
          INSTRUCCIONES:
          1. Reemplaza GTM-XXXXXXX con tu ID real de Google Tag Manager
          2. Descomenta el bloque de código de abajo
          3. Este noscript debe ir inmediatamente después del <body>
          ================================================================

          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        */}
        {children}
      </body>
    </html>
  )
}
