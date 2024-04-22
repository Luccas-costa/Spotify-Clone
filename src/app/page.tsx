import Main_Header from "@/components/Main_Header/Main_Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1 overflow-auto'>
        {/* ta proximo passo é poder clilcar numa playlist no main e ela ir aparacer no expositor e o tempo resetar no player para começar a dar inicio a funcionalidade do player de musica  */}
        <Sidebar />
        <Main_Header />
      </div>
      <Footer />
    </div>
  );
}
