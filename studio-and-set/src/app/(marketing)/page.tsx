import Clients from "@/components/Clients/Clients"
import Services from "@/components/Services/Services"
import Process from "@/components/Process/Process"
import Portfolio from "@/components/Portfolio/Portfolio"
import Storefront from "@/components/Storefront/Storefront";
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Clients/>
      <Services/>
      <Process/>
      <Portfolio/>
      <Storefront />
      <Footer/>
    </main>
  );
}