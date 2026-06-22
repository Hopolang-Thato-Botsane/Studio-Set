import Clients from "@/components/Clients/Clients"
import Services from "@/components/Services/Services"
import Process from "@/components/Process/Process"
import Storefront from "@/components/Storefront/Storefront";
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Clients/>
      <Services/>
      <Process/>
      <Storefront />
      <Footer/>
    </main>
  );
}