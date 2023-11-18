import './globals.css'
import AuthContext from './context/AuthContext'
import ActiveStatus from './components/ActiveStatus'
import ToasterContext from './context/ToasterContext'

import { Metadata } from "next";
export const metadata:Metadata={
  title:{
   default:"messagneger clone",
   template:`%s | Messanger clone Here`
  },
  description:"chatt only with fiends not with others",
  keywords:"messagnegr chatt test",
  
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  )
}
