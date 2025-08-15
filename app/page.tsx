import Navbar from "@/components/navbar"
import LogoSection from "@/components/logo-section"
import ContentSection from "@/components/content-section"
import BottomNav from "@/components/bottom-nav"

export default function Home() {
  return (
    <div className="overflow-hidden m-0 p-0 h-screen bg-cover bg-[url('/bg.jpg')] bg-absolute bg-no-repeat pt-[60px]">
      <Navbar />
      <LogoSection />
      <ContentSection />
      <BottomNav />
    </div>
  )
}
