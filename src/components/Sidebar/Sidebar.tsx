import React from "react";

import { Search, Library } from "lucide-react";
import { House } from "@phosphor-icons/react/dist/ssr";

import Opcoes from "./Opcoes/Opcoes";
import Botao_mac from "./botao_mac/Botao_mac";
import Create_Like from "./Create_Like/Create_Like";
import Playlist_Sugestoes from "./Playlist_Sugestoes/Playlist_Sugestoes";

export default function Sidebar() {
  return (
    <aside className='w-72 bg-zinc-950 p-6 sticky top-0'>
      <Botao_mac />

      <nav className='space-y-5 mt-10'>
        <Opcoes texto='Home' hover={true}>
          <House size={30} />
        </Opcoes>
        <Opcoes texto='Search' hover={false}>
          <Search size={30} />
        </Opcoes>
        <Opcoes texto='Your Library' hover={false}>
          <Library size={30} />
        </Opcoes>
        <div>
          <Create_Like />
        </div>
      </nav>

      {/* criar as abas de crias playlist e favoritas fazendo com que realmente crie e que tudo seja puxado de um array de objetos de playlist, olhar na foto a referencia*/}

      <nav className='mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-2'>
        <Playlist_Sugestoes plalist='っ( ^皿＾)っ' />
        <Playlist_Sugestoes plalist='Matue' />
        <Playlist_Sugestoes plalist='Jack Jhonson' />
        <Playlist_Sugestoes plalist='Red Hot Chili Peppers' />
        <Playlist_Sugestoes plalist='Bootleg Rascal' />
        <Playlist_Sugestoes plalist='Drake' />
        <Playlist_Sugestoes plalist='KayBlack' />
        <Playlist_Sugestoes plalist='Costa Gold' />
        <Playlist_Sugestoes plalist='Skrillex' />
        <Playlist_Sugestoes plalist=' Dua Lipa' />
      </nav>
    </aside>
  );
}
