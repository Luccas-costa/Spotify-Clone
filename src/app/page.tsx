"use client";
import Main_Header from "@/components/Main_Header/Main_Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import Footer from "@/components/Footer/Footer";
import { useState } from "react";

export default function Home() {
  const [KeyAlbum, setKeyAlbum] = useState<number>(6);

  function Album(key: number) {
    console.log(key);
    setKeyAlbum(key);
  }

  let chavefinal = KeyAlbum;

  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1 overflow-auto'>
        <Sidebar />
        <Main_Header conexao={Album} />
        {/* tudo feito pra  trocar a logo do exipositor agora e fazer tocar a musica quando der clicar na playlist e dps fazer os controles de para e tudo mais funcionar */}
      </div>
      <Footer chave={chavefinal} />
    </div>
  );
}
