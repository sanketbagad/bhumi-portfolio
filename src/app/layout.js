import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bhumi Zalte😜',
  description: 'I am a passionate developer who loves to code and build things. I am a Full Stack Developer and I love to work with JavaScript and its frameworks. I am a quick learner and I love to learn new things. I am a team player and I love to work with a team. I am a good communicator and I love to communicate with people. I am a good problem solver and I love to solve problems. I am a good leader and I love to lead a team.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
