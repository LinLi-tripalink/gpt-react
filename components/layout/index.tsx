import { FC, ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => (
  <main className="p-5">
    <Header />
    {children}
    <Footer />
  </main>
)

export default Layout
