import Clients from "@/components/Clients/Clients"
import Process from "@/components/Process/Process"
import Storefront from "@/components/Storefront/Storefront";
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Clients/>
      <Process/>
      <Storefront />
      <Footer/>
    </main>
  );
}