import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import React from 'react'

import { ToastContainer } from 'react-toastify'

import ThemeRegistry from './ThemeRegistry'
import Providers from './Providers'

export const metadata = {
  title: 'NGtry | Visitor Check-In System',
  description: 'NGtry Visitor Management System'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
    <head>
      <link rel="icon" href="/icon.png" type="image/png" />
    </head>
      <body className="font-poppins">
        <Providers>
          <div className='flex justify-between w-full'>
            <ToastContainer
              position='top-right'
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              icon={false}
              pauseOnHover
              theme='dark'
              style={{ width: '400px' }}
            />
            <section className='w-full'>
              <ThemeRegistry options={{ key: 'mui' }}>
                <main className='px-0 m-0 md:px-0'>{children}</main>
              </ThemeRegistry>
            </section>
          </div>
        </Providers>
      </body>
    </html>
  )
}
